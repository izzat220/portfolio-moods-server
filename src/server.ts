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
app.get("/hey", (req, res) => {
	return res.status(200).json({ success: "it works" });
});

app.set("port", process.env.PORT || 8080);
app.listen(app.get("port"), () =>
	console.log(`🚀 Server running on PORT ${app.get("port")}`)
);
