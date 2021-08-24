import mongoose from 'mongoose';
const postSchema = new mongoose.Schema({
  author: {
    _id: String,
    name: String,
    avatar: String,
  },
  textContent: String,
  image: [],
  createdAt: Date,
  updatedAt: Date,
});

//Only work after create (Using 'save' method)
postSchema.pre('save', function (next) {
  if (this.isNew) {
    this.createdAt = Date.now();
  }
  this.updatedAt = Date.now();
  next();
});

const Post = mongoose.model('Post', postSchema);

export default Post;
