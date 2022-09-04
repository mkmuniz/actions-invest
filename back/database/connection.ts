import { Pool } from 'pg';
require('dotenv').config({ path: __dirname+'/.env' });

const conn = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.NAME,
    password: process.env.PASSWORD,
    port: 5432,
});

module.exports = conn;