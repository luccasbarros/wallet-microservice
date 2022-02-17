import { TypeOrmModule } from '@nestjs/typeorm';

const connection = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pgpass@123',
    database: 'wallet',
    entities: [__dirname + '/../modules/*/entities/*.{js,ts}'],
    synchronize: false,
    migrations: [__dirname + './src/shared/typeorm/migration/*.ts'],
    autoLoadEntities: true,
  }),
});

export { connection };
