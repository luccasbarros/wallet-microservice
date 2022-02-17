import { Controller, Logger } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Wallet } from './entities/wallet.entity';
import { WalletService } from './wallet.service';

@Controller('api/micro/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  logger = new Logger(WalletController.name);

  @EventPattern('create-transaction')
  async storeTransaction(@Payload() transaction: Wallet): Promise<Wallet> {
    this.logger.log(`transaction: ${JSON.stringify(transaction)} `);
    const wallet = await this.walletService.execute(transaction);
    return wallet;
  }
}
