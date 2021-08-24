import Post from '../models/postModel.js';
const getPost = async (req, res) => {
  try {
    let query = Post.find();
    query = query.sort('-updatedAt');
    const post = await query;

    res.status(200).json({
      result: post.length,
      status: 'Success',
      post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const createPost = async (req, res) => {
  try {
    const post = await Post.create({
      author: req.body.user,
      textContent: req.body.textContent,
      image: req.body.image,
    });
    req.body.user.post.push(post._id);
    console.log(req.body.user);
    res.status(200).json({
      status: 'Success',
      post,
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) throw Error('Post not found');
    res.status(200).json({
      status: 'Success',
      message: `${post.author.name}'s post is deleted`,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const newPost = await Post.findById(req.params.id);
    newPost.textContent = req.body.textContent;
    newPost.save();
    res.status(200).json({
      status: 'Success',
      newPost,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};

export { getPost, createPost, deletePost, updatePost };
