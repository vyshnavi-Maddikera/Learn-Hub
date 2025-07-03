import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    descriptions: [
      {
        heading: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
    discipline: {
      type: String,
      enum: ['engineering', 'medical', 'development', 'marketing', 'science', 'designer'],
      required: true,
    },
    imageUrl: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("BlogModel", blogSchema);
export default Blog;
