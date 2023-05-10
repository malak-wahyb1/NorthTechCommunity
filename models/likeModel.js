import mongoose from "mongoose";
const { Schema, model } = mongoose;

const likeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    post:{
      type: Schema.Types.ObjectId,
      ref: "Post",
    }
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
    versionKey: false,
  }
);
likeSchema.pre(["find"], function () {
  this.populate("user").populate("post");
});

const Like = model("Like", likeSchema);
export default Like;
