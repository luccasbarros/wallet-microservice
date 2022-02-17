import { Module } from '@nestjs/common';
import { WalletModule } from './modules/wallet/wallet.module';
import { connection } from './shared/typeorm/database/database.provider';

@Module({
  imports: [WalletModule, connection],
  controllers: [],
  providers: [],
})
export class AppModule {}
