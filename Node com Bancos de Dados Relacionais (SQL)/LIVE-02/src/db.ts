import { Pool } from "pg";

const connectionString = 'postgres://atekpbjz:a1QWHWjFJNVgvp8LafXgwSZJQhLS5lfF@kashin.db.elephantsql.com/atekpbjz';

const db = new Pool({connectionString});

export default db;