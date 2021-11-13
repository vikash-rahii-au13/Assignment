/** @format */

import { Router, Response, Request } from "express";
import { JobEntity } from "../entities/job";
import { JobService } from "../services/jobServices"; // import service

export class JobController {
	public router: Router;
	private jobService: JobService;

	constructor() {
		this.jobService = new JobService(); // Create a new instance of JobController
		this.router = Router();
		this.routes();
	}

	public index = async (req: Request, res: Response) => {
		const jobs = await this.jobService.index();
		res.send(jobs).json();
	};

	public create = async (req: Request, res: Response) => {
		const job = req["body"] as JobEntity;
		const newJob = await this.jobService.create(job);
		res.send(newJob);
	};

	public update = async (req: Request, res: Response) => {
		const job = req["body"] as JobEntity;
		const id = req["params"]["id"];

		res.send(this.jobService.update(job, Number(id)));
	};

	public delete = async (req: Request, res: Response) => {
		const id = req["params"]["id"];
		res.send(this.jobService.delete(Number(id)));
	};

	/**
	 * Configure the routes of controller
	 */
	public routes() {
		this.router.get("/", this.index);
		this.router.post("/", this.create);
		this.router.put("/:id", this.update);
		this.router.delete("/:id", this.delete);
	}
}
