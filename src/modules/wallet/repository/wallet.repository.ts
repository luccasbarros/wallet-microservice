import { getRepository, Repository } from 'typeorm';
import { Wallet } from '../entity/Wallet';
import { IWalletRepository } from './implementation/IWalletRepository';

export class WalletRepository implements IWalletRepository {
  private ormRepository: Repository<Wallet>;

  constructor() {
    this.ormRepository = getRepository(Wallet);
  }
  storeTransaction(): Promise<Wallet> {
    throw new Error('Method not implemented.');
  }
}
