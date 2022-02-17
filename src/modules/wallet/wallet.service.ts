import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransactionDTO } from './dtos/create-transaction.dto';
import { WalletRepository } from './repository/wallet.repository';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(WalletRepository)
    private readonly walletRepository: WalletRepository,
  ) {}

  public async execute(data: CreateTransactionDTO) {
    const transaction = await this.walletRepository.storeTransaction(data);

    return transaction;
  }
}
