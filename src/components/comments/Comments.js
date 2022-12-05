import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

import "../../styles/comments.css";

const Comments = () => {
  let allPosts = [
    {
      postId: "1",
      userImage: "https://i.brecorder.com/primary/2022/05/62784ff58c892.jpg",
      userName: "Imran Khan Official",
      userDescription: "Head of PTI Political Party",
      postImage:
        "https://s.wsj.net/public/resources/images/WO-AT805_PAKPRO_GR_20140921174059.jpg",
      postTitle: "PTI Long March at D-ground Islamabad, Protesing against Govt",
      numberOfComments: 77,
      createdAt: "4 hours ago",
      comments: [
        {
          user: {
            userName: "Imran Khan Official",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://i.brecorder.com/primary/2022/05/62784ff58c892.jpg",
          },
          text: "This is very intelligent move from the leader.",
          createdAt: "44m",
        },
        {
          user: {
            userName: "Faisal Sarfaraz",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          createdAt: "44m",
        },
        {
          user: {
            userName: "Umair Akmal",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/886285/pexels-photo-886285.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          createdAt: "44m",
        },
        {
          user: {
            userName: "Iram Iftakhar",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          createdAt: "44m",
        },
      ],
    },
    {
      postId: "2",
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsenikcDNlWt7zCJl8btgablTF8sqMimAsQ&usqp=CAU",
      userName: "Elon Must Official",
      userDescription: "CEO at Twitter",
      postImage:
        "https://d1e00ek4ebabms.cloudfront.net/production/3d92a4e3-3092-4230-be3f-cd48c2f9e197.jpg",
      postTitle: "Elon Musk takes over twitter in style",
      numberOfComments: 1087,
      createdAt: "2 hours ago",
      comments: [
        {
          user: {
            userName: "Elon Must",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: "This is very intelligent move from the leader.",
          createdAt: "44m",
        },
        {
          user: {
            userName: "John Walton",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          createdAt: "44m",
        },
        {
          user: {
            userName: "David Brown",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/713520/pexels-photo-713520.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
          createdAt: "44m",
        },
        {
          user: {
            userName: "Amir Khan",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600",
          },
          text: " It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          createdAt: "44m",
        },
      ],
    },
  ];
  const [posts, setPosts] = useState(allPosts);
  const [isUpdated, setIsUpdated] = useState(false);

  const location = useLocation();
  const { idOfPost, userImage, postId, userName } = location.state;
  // console.log(postId);

  //adComment handler
  const addComent = (e, text) => {
    // console.log(post.numberOfComments);

    posts.map((p) => {
      if (p.postId === postId) {
        p.comments.push({
          user: {
            userName: userName,
            userDescription: "Head of PTI Political Party",
            userImage: userImage,
          },
          text: text,
          createdAt: "44m",
        });
      }
    }); //map

    setPosts((pre) => {
      // console.log("phely wali", pre);

      // console.log(pre);
      e.target.value = "";
      setIsUpdated(!isUpdated);
      return pre;
    }); //setPosts
  };

  const foundPost = posts.find((post) => post.postId === idOfPost);
  // console.log(foundPost.comments);
  //   foundPost.comments.map((comment) => console.log(comment.user.userName));

  return (
    <div className="comments-page">
      <Container>
        <div className="header">
          <Link to={"/"} style={{ color: "#fff" }}>
            <FaAngleLeft className="logo"></FaAngleLeft>
          </Link>

          <span>Comments</span>
        </div>
        {/* header */}
        <div className="body">
          {foundPost.comments.map((comment, index) => {
            console.log(comment.text);

            return (
              <div className="comment-content" key={index}>
                <div className="profile-image">
                  <img src={comment.user.userImage} alt="user image is here" />
                </div>
                <div className="text">
                  <p>
                    <span>{comment.user.userName}</span> <br /> {comment.text}
                  </p>
                  <p className="createdAt">{comment.createdAt}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* body */}

        <div className="comment-content">
          <div className="profile-image">
            <img src={userImage} alt="user image is here" />
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Add a comment ....."
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  addComent(e, e.target.value);
                }
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Comments;
