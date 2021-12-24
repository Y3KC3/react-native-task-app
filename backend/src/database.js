import mysql from 'mysql2/promise';
import { key } from './key';

export const connect = async () => {
    return await mysql.createConnection(key);
};