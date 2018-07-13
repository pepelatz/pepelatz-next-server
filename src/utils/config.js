import dotenv from 'dotenv';
import path from 'path';

const root = path.join.bind(this, __dirname, '../../');
dotenv.config({ path: root('.env') });

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = !isProduction;

export const url = process.env.URL;
export const port = process.env.PORT;
export const endpointURL = process.env.ENDPOINT_URL;
