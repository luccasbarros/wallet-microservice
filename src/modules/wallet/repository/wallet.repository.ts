import { EntityRepository, Repository } from 'typeorm';
import { CreateTransactionDTO } from '../dtos/create-transaction.dto';
import { Wallet } from '../entities/wallet.entity';

@EntityRepository(Wallet)
export class WalletRepository extends Repository<Wallet> {
  public async storeTransaction(data: CreateTransactionDTO): Promise<Wallet> {
    const transaction = this.create(data);
    await this.save(transaction);
    return transaction;
  }
}
