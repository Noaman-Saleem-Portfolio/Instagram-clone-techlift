import React from "react";
import Header from "./Header";

import "../../styles/home-style.css";
import Post from "./Post";

const Home = () => {
  let posts = [
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
            userName: "Imran Khan Official",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://i.brecorder.com/primary/2022/05/62784ff58c892.jpg",
          },
          text: "This is very intelligent move from the leader.",
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
            userName: "Imran Khan Official",
            userDescription: "Head of PTI Political Party",
            userImage:
              "https://i.brecorder.com/primary/2022/05/62784ff58c892.jpg",
          },
          text: "This is very intelligent move from the leader.",
          createdAt: "44m",
        },
      ],
    },
  ];
  return (
    <div className="home-page">
      <Header></Header>
      <Post posts={posts}></Post>
    </div>
  );
};

export default Home;
