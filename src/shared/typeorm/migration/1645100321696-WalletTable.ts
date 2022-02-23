import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class WalletTable1645100321696 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.query;
    await queryRunner.createTable(
      new Table({
        name: 'transactions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'user_id',
            type: 'uuid',
          },
          {
            name: 'type',
            type: 'varchar',
            enum: ['CREDIT', 'DEBIT'],
          },
          {
            name: 'amount',
            type: 'integer',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE transactions');
  }
}
