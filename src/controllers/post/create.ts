import moment from "moment";
import PostModel from "../../models/PostModel";

export default async (req: any, res: any): Promise<any> => {
	let { text, postedBy, mood } = req.body;

	if (!text || !postedBy || !mood) {
		return res.status(400).json({ message: "Missing required fields" });
	}

	text = text.trim();
	if (text.length < 50 || text.length > 500) {
		return res.status(400).json({
			message: "Content length should be between 50 and 500 characters",
		});
	}

	//TODO: double check if mood is within the preset ones

	await PostModel.create({
		mood,
		text,
		postedBy,
		postedOn: moment().toISOString(),
	})
		.then((doc) => {
			return res.status(200).json(doc);
		})
		.catch((err) => {
			return res.status(500).json({ message: "DB error has occurred" });
		});
};
