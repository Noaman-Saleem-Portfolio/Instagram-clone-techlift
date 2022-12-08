import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Comments from "./components/comments/Comments";
import MessageList from "./components/messageList/MessageList";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/user-profile" element={<Profile></Profile>}></Route>
          <Route path="/comments" element={<Comments></Comments>}></Route>
          <Route path="/messages" element={<MessageList></MessageList>}></Route>
        </Routes>
      </Provider>
    </>
  );
}

export default App;
