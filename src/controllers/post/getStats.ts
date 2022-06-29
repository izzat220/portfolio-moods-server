import moment from "moment";
import PostModel from "../../models/PostModel";

export default async (req: any, res: any): Promise<any> => {
	let totalMoods = await PostModel.countDocuments();
	let todaysMoods = await PostModel.countDocuments({
		postedOn: {
			$gte: moment().startOf("day").toISOString(),
			$lte: moment().endOf("day").toISOString(),
		},
	});

	return res.status(200).json({ totalMoods, todaysMoods });
};
