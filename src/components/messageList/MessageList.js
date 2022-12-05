import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../../styles/message-list.css";

const MessageList = () => {
  const location = useLocation();
  const { idOfUser } = location.state;

  let userProfile = [
    {
      userId: "1",
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
      userId: "2",
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

  let specificUser = userProfile.find((user) => user.userId === idOfUser);
  console.log(specificUser);
  return (
    <div className="message-list-page">
      <div className="header">
        <Container>
          <div className="header-content">
            <Link to={"/"} style={{ color: "#000" }}>
              <FaAngleLeft className="logo"></FaAngleLeft>
            </Link>
            <span>{specificUser.userName}</span>
          </div>
        </Container>
      </div>
      {/* header */}
    </div>
  );
};

export default MessageList;
