/** @format */

import { getConnection } from "typeorm";
import { JobEntity } from "../entities/job";
import { JobRepository } from "../repository/jobRespository";

export class JobService {
	private jobRepository: JobRepository;

	constructor() {
		this.jobRepository = getConnection("job").getCustomRepository(JobRepository);
	}

	public index = async () => {
		const posts = await this.jobRepository.find();
		return posts;
	};

	public create = async (job: JobEntity) => {
		const newJob = await this.jobRepository.save(job);
		return newJob;
	};

	public update = async (job: JobEntity, id: number) => {
		const updatedPost = await this.jobRepository.update(id, job);
		return updatedPost;
	};

	public delete = async (id: number) => {
		const deletedPost = await this.jobRepository.delete(id);
		return deletedPost;
	};
}
