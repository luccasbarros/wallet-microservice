import { TypeOrmModule } from '@nestjs/typeorm';

const connection = TypeOrmModule.forRootAsync({
  useFactory: () => ({
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    port: Number(process.env.TYPEORM_PORT),
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    entities: [__dirname + '/../modules/*/entities/*.{js,ts}'],
    synchronize: false,
    migrations: [__dirname + './src/shared/typeorm/migration/*.ts'],
    autoLoadEntities: true,
    cli: { migrationsDir: 'src/shared/typeorm/migration' },
  }),
});

export { connection };
