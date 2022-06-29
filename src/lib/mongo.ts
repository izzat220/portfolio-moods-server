import mongoose from "mongoose";
import env from "./env";

mongoose.Promise = global.Promise;

const mongo = (): any => {
	mongoose.connect(env.MONGO_URL, (err) => {
		if (!err) {
			console.log("🍃 Mongo DB Connected");
		} else {
			console.log("Error in DB connection: " + err);
		}
	});
};

export default mongo;
