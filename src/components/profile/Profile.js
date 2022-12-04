import React from "react";
import Container from "react-bootstrap/Container";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "../../styles/profile.css";

const Profile = () => {
  const location = useLocation();
  const { from } = location.state;
  console.log(from);
  let userProfile = [
    {
      userImage: "https://i.brecorder.com/primary/2022/05/62784ff58c892.jpg",
      userName: "Imran Khan Official",
      profession: "Polician",
      userDescription: "Head of PTI Political Party",
      weblink: "https://www.pti.punjab.gov.pk",
      gallary: [
        "https://www.thenews.com.pk/assets/uploads/akhbar/2022-04-11/949292_9656676_IKzawal2_akhbar.jpg",
        "https://i.dawn.com/primary/2022/11/6361db777e701.jpg",
        "https://www.thenews.com.pk/assets/uploads/akhbar/2022-04-11/949292_9656676_IKzawal2_akhbar.jpg",
        "https://i.dawn.com/primary/2022/11/6361db777e701.jpg",
        "https://www.thenews.com.pk/assets/uploads/akhbar/2022-04-11/949292_9656676_IKzawal2_akhbar.jpg",
        "https://i.dawn.com/primary/2022/11/6361db777e701.jpg",
      ],
    },
    {
      userImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLsenikcDNlWt7zCJl8btgablTF8sqMimAsQ&usqp=CAU",
      userName: "Elon Must Official",
      profession: "Entreprenuer | IT Professional",
      userDescription: "CEO at Twitter",
      weblink: "https://www.spacex.com",
      gallary: [
        "https://imageio.forbes.com/specials-images/imageserve/602c8b76a6dd3c96219dcb64/0x0.jpg?format=jpg&width=1200",
        "https://yellowhammernews.com/wp-content/uploads/2021/04/Elon-Musk-SpaceX.jpg",
        "https://imageio.forbes.com/specials-images/imageserve/602c8b76a6dd3c96219dcb64/0x0.jpg?format=jpg&width=1200",
        "https://yellowhammernews.com/wp-content/uploads/2021/04/Elon-Musk-SpaceX.jpg",
        "https://imageio.forbes.com/specials-images/imageserve/602c8b76a6dd3c96219dcb64/0x0.jpg?format=jpg&width=1200",
        "https://yellowhammernews.com/wp-content/uploads/2021/04/Elon-Musk-SpaceX.jpg",
      ],
    },
  ];

  let specificUser = userProfile.find((user) => user.userName === from);
  console.log(specificUser);
  return (
    <div className="profile-page">
      <Container>
        <div className="header">
          <Link to={"/"} style={{ color: "#fff" }}>
            <FaAngleLeft className="logo"></FaAngleLeft>
          </Link>

          <span>{specificUser.userName}</span>
        </div>
        {/* header */}
        <div className="statistics">
          <div className="image">
            <img src={specificUser.userImage} alt="user image" />
          </div>
          <div className="social-stats">
            <div className="posts">
              13.7 k <br /> Posts
            </div>
            <div className="followers">
              7.8 M <br /> Followers
            </div>
            <div className="following">
              1 <br /> Following
            </div>
          </div>
        </div>
        {/* statistics */}

        <div className="details">
          <p className="name">{specificUser.userName}</p>
          <p className="profession">{specificUser.profession}</p>
          <p className="userDescription">{specificUser.userDescription}</p>
          <p className="weblink">{specificUser.weblink}</p>
        </div>
        {/* details */}

        <Link className="message-btn btn btn-lg btn-primary">Message</Link>

        <div className="gallary">
          {specificUser.gallary.map((image, index) => {
            return (
              <div className="gallary-image">
                <img src={image} alt="" />
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Profile;
