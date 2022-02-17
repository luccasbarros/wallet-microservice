import { Wallet } from '../../entities/wallet.entity';

export interface IWalletRepository {
  storeTransaction(): Promise<Wallet>;
}
