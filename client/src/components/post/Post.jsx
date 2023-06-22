import "./post.css";
import Img3 from "../assets/213.jpg";
import { Link } from "react-router-dom";

export default function Post({ post }) {

  const PF = "http://localhost:5000/images/"

  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {/* <span className="postCat">Music</span>
          <span className="postCat">Life</span> */}
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.date).toDateString()}
        </span>
      </div>
      <p className="postDescription">{post.desc}</p>
    </div>
  );
}

// style={{width:"61.3rem"}}


