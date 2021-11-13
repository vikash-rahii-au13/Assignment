/** @format */

import { EntityRepository, Repository } from "typeorm";
import { JobEntity } from "../entities/job";

@EntityRepository(JobEntity)
export class JobRepository extends Repository<JobEntity> {}
