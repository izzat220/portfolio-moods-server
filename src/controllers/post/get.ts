import moment from "moment";
import PostModel from "../../models/PostModel";

export default async (req: any, res: any): Promise<any> => {
	const cursor = parseInt(req.query.cursor) || 0;
	let posts = await PostModel.find()
		.sort({ _id: -1 })
		.skip(cursor * 10)
		.limit(10);

	let totalCount = await PostModel.countDocuments().skip((cursor + 1) * 10);
	let nextPage = totalCount ? cursor + 1 : false;

	return res.status(200).json({ posts, nextPage });
};
