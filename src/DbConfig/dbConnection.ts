/** @format */

import { createConnection } from "typeorm";
import dotenv from "dotenv";
import { Job } from "../entities/job";

dotenv.config();
console.log(">>>>>", process.env.TYPE);
const main = async () => {
	try {
		await createConnection({
			type: "postgres",
			host: "localhost",
			port: 5432,
			username: "postgres",
			password: "1234",
			database: "crud",
			entities: [Job],
			synchronize: true,
		});
		console.log("Connected to Postgres Database");
	} catch (error) {
		console.log(error);
		throw new Error("unable to connect");
	}
};

export default main;
