import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, STATUSES } from "../../redux/slices/postSlice";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import { BsHeart, BsChat } from "react-icons/bs";

// *********************************************

import "../../styles/post-style.css";

const Post = () => {
  const dispatch = useDispatch();
  const { data: posts, status } = useSelector((state) => state.post);
  console.log(posts);
  useEffect(() => {
    dispatch(fetchPosts());
    // const fetchProducts = async () => {
    //     const res = await fetch('https://fakestoreapi.com/products');
    //     const data = await res.json();
    //     console.log(data);
    //     setProducts(data);
    // };
    // fetchProducts();
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  return (
    <>
      {posts.map((post, index) => {
        return (
          <div className="post-page" key={index}>
            <Container>
              {/* post-header */}
              <div className="post-header">
                <div className="user-profile-image">
                  <img src="" alt="user" />
                </div>
                <div className="user-info">
                  <p className="">
                    <Link
                      to="/user-profile"
                      state={{ from: "Nomi" }}
                      className="user-name">
                      Nomi
                    </Link>
                  </p>
                  <p className="user-desc">Nomi ki description</p>
                </div>
              </div>
              {/* post-header */}
              <div className="post-image">
                <img src={post.image} alt="post-emoji" />
              </div>
              <div className="post-icons">
                <BsHeart className="first"></BsHeart>
                <BsChat className="second"></BsChat>
              </div>
              <div className="post-footer">
                <p className="post-title">{post.title}</p>
                <Link to={"/comments"} className="comments">
                  View all 44 comments
                </Link>
                <p className="time">{post.createdAt.type}</p>
              </div>
            </Container>
          </div>
          // post-page div
        );
      })}
    </>
  );
};

export default Post;
