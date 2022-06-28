import moment from "moment";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongo from "./lib/mongo";
import post from "./routes/post";
import PostModel from "./models/PostModel";

const app = express();

require("dotenv").config();
mongo();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		credentials: true,
		origin: ["http://localhost:3000", "http://localhost:3001"],
	})
);

app.use("/post", post);

// app.get("/createTons", async (req, res) => {
// 	let newPosts = [];
// 	for (let i = 0; i < 100; i++) {
// 		newPosts.push({
// 			postedBy: "Test Name",
// 			text:
// 				"One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by",
// 			postedOn: moment().toISOString(),
// 			mood: "Happy",
// 		});
// 	}

// 	await PostModel.insertMany(newPosts);

// 	return res.send("done");
// });

app.listen(8080, () => console.log(`🚀 Server running on PORT 8080`));
