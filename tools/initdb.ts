import dotenv from "dotenv";
import fs from "fs";
import { Client } from "pg";
import util from "util";

const readFile = util.promisify(fs.readFile);

const init = async () => {

    dotenv.config();

    const client = new Client();

    try {
        await client.connect();
        const sql = await readFile("./tools/initdb.pgsql", "utf-8");

        const statements = sql.split("/;\s*$/m");
        for (const statement of statements) {
            if (statement.length > 3) {
                await client.query(statement);
            }
        }
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        await client.end();
    }

};
init().then(() => {
    console.log("Finished !!");
}).catch(() => {
    console.log("finished with errors");
});
