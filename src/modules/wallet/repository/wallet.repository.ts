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

  public async list(): Promise<Wallet[]> {
    const transactions = await this.find();
    return transactions;
  }

  public async findById(id: string): Promise<Wallet> {
    const transaction = await this.findOne({ id });
    return transaction;
  }
}
