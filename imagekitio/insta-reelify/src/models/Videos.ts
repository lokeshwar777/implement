import mongoose, { model, models, Schema } from "mongoose";

export const VIDEO_DIMENSIONS = {
	height: 1920,
	width: 1080,
} as const;

export interface VideoInterface {
	_id?: mongoose.Types.ObjectId;
	title: string;
	description: string;
	videoUrl: string;
	thumbnailUrl: string;
	controls?: boolean;
	transformation?: {
		height: number;
		width: number;
		quality?: number;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

const videoSchema = new Schema<VideoInterface>(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		videoUrl: { type: String, required: true },
		thumbnailUrl: { type: String, default: "" },
		controls: { type: Boolean, default: true },
		transformation: {
			height: { type: Number, default: VIDEO_DIMENSIONS.height },
			width: { type: Number, default: VIDEO_DIMENSIONS.width },
			quality: { type: Number, min: 1, max: 100 },
		},
	},
	{ timestamps: true },
);

const Video = models?.Video ?? model<VideoInterface>("Video", videoSchema);

export default Video;
