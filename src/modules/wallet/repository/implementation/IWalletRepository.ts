import { Wallet } from '../../entity/Wallet';

export interface IWalletRepository {
  storeTransaction(): Promise<Wallet>;
}
