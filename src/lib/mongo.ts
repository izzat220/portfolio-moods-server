import mongoose from "mongoose";

mongoose.Promise = global.Promise;

const mongo = (): any => {
	mongoose.connect("mongodb://localhost:27017/portfolio-social-app", (err) => {
		if (!err) {
			console.log("🍃 Mongo DB Connected");
		} else {
			console.log("Error in DB connection: " + err);
		}
	});
};

export default mongo;
