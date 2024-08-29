import mongoose, { Model, Document } from "mongoose";
import { IComment } from "./comment.model";

export interface IPost {
  description: string;
  user: {
    userId: string;
    profilePhoto: string;
    firstName: string;
    lastName: string;
  };
  imageUrl?: string;
  likes?: string[];
  comments: IComment[];
}

export interface IPostDocument extends IPost, Document {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new mongoose.Schema<IPostDocument>(
  {
    description: {
      type: String,
      required: true,
    },
    user: {
      userId: {
        type: String,
        required: true,
      },
      profilePhoto: {
        type: String,
        required: true,
      },
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    imageUrl: {
      type: String,
      default: "",
    },
    likes: {
      type: [String],
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

// Correct model initialization
export const Post: Model<IPostDocument> =
  mongoose.models?.Post || mongoose.model<IPostDocument>("Post", postSchema);


