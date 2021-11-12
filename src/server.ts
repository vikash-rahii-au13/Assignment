/** @format */

import express, { Application } from "express";
import main from "../src/DbConfig/dbConnection";
const app: Application = express();
main();

app.listen(3006, () => {
	console.log("server is running on port", 3006);
});
