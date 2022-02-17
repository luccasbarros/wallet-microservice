import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallet/wallet.module';

@Module({
  imports: [WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
