import {posts} from '../../../data/posts';

export default function handler(req, res) {
    let id = req.query.id;
    let post = posts.find(post=> post.id == id);
    if (post) {
        res.status(200).json(post);
    } else {
        res.status(400).json({error: 'Not Found'});
    }
  }