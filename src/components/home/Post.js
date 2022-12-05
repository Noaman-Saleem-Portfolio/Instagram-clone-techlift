import React from "react";
import Container from "react-bootstrap/Container";
import { BsHeart, BsChat } from "react-icons/bs";
import { Link } from "react-router-dom";

import "../../styles/post-style.css";

const Post = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        return (
          <div className="post-page" key={index}>
            <Container>
              {/* post-header */}
              <div className="post-header">
                <div className="user-profile-image">
                  <img src={post.userImage} alt="user image" />
                </div>
                <div className="user-info">
                  <p className="">
                    <Link
                      to="/user-profile"
                      state={{ from: post.userName }}
                      className="user-name">
                      {post.userName}
                    </Link>
                  </p>
                  <p className="user-desc">{post.userDescription}</p>
                </div>
              </div>
              {/* post-header */}
              <div className="post-image">
                <img src={post.postImage} alt="post-image" />
              </div>
              <div className="post-icons">
                <BsHeart className="first"></BsHeart>
                <BsChat className="second"></BsChat>
              </div>
              <div className="post-footer">
                <p className="post-title">{post.postTitle}</p>
                <Link
                  to={"/comments"}
                  state={{
                    idOfPost: post.postId,
                    userImage: post.userImage,
                    postId: post.postId,
                    userName: post.userName,
                  }}
                  className="comments">
                  View all {post.numberOfComments} comments
                </Link>
                <p className="time">{post.createdAt}</p>
              </div>
            </Container>
          </div>
        );
      })}
    </>
  );
};

export default Post;
