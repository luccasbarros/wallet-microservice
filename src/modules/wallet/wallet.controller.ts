import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateTransactionDTO } from './dtos/create-transaction.dto';
import { Wallet } from './entities/wallet.entity';
import { WalletService } from './wallet.service';

@Controller('api/micro/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async storeTransaction(
    @Body() createTransactionDTO: CreateTransactionDTO,
  ): Promise<Wallet> {
    const wallet = await this.walletService.execute(createTransactionDTO);
    return wallet;
  }
}
