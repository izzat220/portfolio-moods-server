import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongo from "./lib/mongo";
import post from "./routes/post";

const app = express();

require("dotenv").config();
mongo();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		credentials: true,
		origin: ["https://portfolio-moods-app.vercel.app"],
	})
);

app.use("/post", post);

app.listen(8080, () => console.log(`🚀 Server running on PORT 8080`));
