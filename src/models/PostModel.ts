import { Schema, model } from "mongoose";
import IPost from "../interfaces/Post";

const postSchema = new Schema<IPost>({
	text: {
		type: String,
		required: true,
	},
	mood: {
		type: String,
		required: true,
	},
	postedOn: {
		type: String,
		required: true,
	},
	postedBy: {
		type: String,
		required: true,
	},
});

const PostModel = model<IPost>("Post", postSchema);

export default PostModel;
