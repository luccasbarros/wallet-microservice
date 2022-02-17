import { EntityRepository, Repository } from 'typeorm';
import { Wallet } from '../entities/wallet.entity';

@EntityRepository(Wallet)
export class WalletRepository extends Repository<Wallet> {
  storeTransaction(): Promise<Wallet> {
    throw new Error('Method not implemented.');
  }
}
