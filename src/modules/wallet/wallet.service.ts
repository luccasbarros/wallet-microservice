import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTransactionDTO } from './dtos/create-transaction.dto';
import { Wallet } from './entities/wallet.entity';
import { WalletRepository } from './repository/wallet.repository';
import { TransactionType } from './enum/TransactionType';

@Injectable()
export class WalletService {
  private readonly logger = new Logger(WalletService.name);
  constructor(
    @InjectRepository(WalletRepository)
    private readonly walletRepository: WalletRepository,
  ) {}

  public async create(data: CreateTransactionDTO): Promise<Wallet> {
    try {
      if (data.amount <= 0) {
        throw new BadRequestException('Invalid amount');
      }

      const transaction = await this.walletRepository.storeTransaction(data);

      return transaction;
    } catch (error) {
      throw new RpcException(error.message);
    }
  }

  public async listAll(): Promise<Wallet[]> {
    try {
      return await this.walletRepository.list();
    } catch (error) {
      this.logger.error(`error: ${error.message}`);
      throw new RpcException(error.message);
    }
  }

  public async findById(id: string): Promise<Wallet> {
    try {
      const transaction = await this.walletRepository.findById(id);

      if (!transaction) {
        throw new BadRequestException('Transaction does not exist');
      }

      return transaction;
    } catch (error) {
      this.logger.error(`error: ${error.message}`);
      throw new RpcException(error.message);
    }
  }
}
