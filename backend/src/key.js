import { config } from 'dotenv'; // Nos sirve para guardar informacion como variables de entorno
config();

export const key = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'mobiletasks'
};