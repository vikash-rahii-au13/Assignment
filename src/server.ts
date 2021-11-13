/** @format */
import express, { Request, Response } from "express";
import main from "../src/DbConfig/dbConnection";
import { JobController } from "./controllers/jobController";
// import { createConnection } from "typeorm";
// const app: Application = express();
main();

class Server {
	private jobController: JobController;
	private app: express.Application;

	constructor() {
		this.app = express(); // init the application
		this.configuration();
		this.routes();
	}

	/**
	 * Method to configure the server,
	 * If we didn't configure the port into the environment
	 * variables it takes the default port 3000
	 */
	public configuration() {
		this.app.set("port", process.env.PORT || 3006);
		this.app.use(express.json());
		// this.app.use(main);
	}

	/**
	 * Method to configure the routes
	 */
	public async routes() {
		//   await createConnection({
		// 	type: "postgres",
		// 	host: "localhost",
		// 	port: 5434,
		// 	username: "blog",
		// 	password: "blog",
		// 	database: "blog",
		// 	entities: ["build/database/entities/**/*.js"],
		// 	synchronize: true,
		// 	name: "blog"
		//   });

		this.jobController = new JobController();

		this.app.get("/", (req: Request, res: Response) => {
			res.send("Welcome!!");
		});

		this.app.use(`/api/v1/jobs/`, this.jobController.router); // Configure the new routes of the controller post
	}

	/**
	 * Used to start the server
	 */
	public start() {
		this.app.listen(this.app.get("port"), () => {
			console.log(`Server is listening ${this.app.get("port")} port.`);
		});
		// this.app.listen(3006, () => {
		// 	console.log("server is running on port", 3006);
		// });
	}
}

// app.use(express.json());
// app.get("/api/v1/check", (req, res) => {
// 	res.send("Welcome to API");
// });
// app.listen(3006, () => {
// 	console.log("server is running on port", 3006);
// });
const server = new Server(); // Create server instance
server.start(); // Execute the server
