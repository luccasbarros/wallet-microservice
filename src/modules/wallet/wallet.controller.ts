import { Controller, Logger } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { Wallet } from './entities/wallet.entity';
import { WalletService } from './wallet.service';

const ackErrors: string[] = ['E11000', 'Transaction does not exist'];

@Controller('api/micro/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  logger = new Logger(WalletController.name);

  @EventPattern('create-transaction')
  async storeTransaction(
    @Payload() transaction: Wallet,
    @Ctx() context: RmqContext,
  ): Promise<Wallet> {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();

    this.logger.log(`transaction: ${JSON.stringify(transaction)} `);

    try {
      const wallet = await this.walletService.create(transaction);
      await channel.ack(originalMessage);
      return wallet;
    } catch (error) {
      this.logger.log(error.message);

      const filterAckError = ackErrors.filter((ackError) =>
        error.message.includes(ackError),
      );

      if (filterAckError.length) {
        await channel.ack(originalMessage);
        return;
      }

      await channel.nack(originalMessage);
    }
  }

  @MessagePattern('list-transactions')
  async listTransactions(@Payload() id: string): Promise<any> {
    if (!id) {
      return await this.walletService.listAll();
    }
    return await this.walletService.findById(id);
  }
}
