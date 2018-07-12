import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(this, __dirname, '../../');
dotenv.config({ path: root('.env') });

export const url = process.env.URL;
export const port = process.env.PORT;
