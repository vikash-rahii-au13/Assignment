/** @format */

import {
	Entity,
	BaseEntity,
	Column,
	PrimaryColumn,
	CreateDateColumn,
	UpdateDateColumn,
} from "typeorm";

@Entity("job")
export class Job {
	@PrimaryColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	description: string;

	@Column()
	location: string;

	@Column({
		type: "numeric",
	})
	hourlyPay: number;

	@Column({
		default: true,
	})
	isActive: boolean;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
