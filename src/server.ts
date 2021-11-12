/** @format */

// console.log("hello!!!!!!!!!!!!");
import express, { Application } from "express";
const app: Application = express();
app.listen(3006, () => {
	console.log("server is running on port", 3006);
});
