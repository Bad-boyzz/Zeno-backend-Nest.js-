import { Injectable, Logger, type OnModuleInit } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    private readonly logger = new Logger('Database');

    constructor() {
        const adapter = new PrismaPg({
            connectionString: process.env.DATABASE_URL as string,
        });
        super({ adapter });
    }

    async $connect(): Promise<void> {
        try {
            await this.$queryRaw`SELECT 1`;
            this.logger.log('Database connection established successfully');
        } catch (error) {
            this.logger.error('Database connection failed', error);
            throw error;
        }
    }

    onModuleInit() {
        this.$connect();
    }
}
