import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState([]);
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image:
        "https://static1.ohman.vn/YanNews/2167221/202002/loat-avatar-danh-cho-cap-doi-khien-hoi-fa-khoc-rong-20200216-023730.jpg",
      message: "Whats up?",
    },
    {
      name: "Ellen",
      image:
        "https://static1.ohman.vn/YanNews/2167221/202002/loat-avatar-danh-cho-cap-doi-khien-hoi-fa-khoc-rong-20200216-023730.jpg",
      message: "Hows it going?",
    },
    {
      message: "Hows it going?",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    if (input !== "") {
      setMessages([...messages, { message: input }]);
    }
    setInput("");
  };

  useEffect(() => {
    let a = document.getElementById("container");
    a.scrollTop = a.scrollHeight;
  });
  return (
    <div className="chatScreen">
      <p> YOU MATCHED WITH ELLEN ON 10/08/20</p>
      <div id="container" className="chatScreen__container">
        {messages.map((message) =>
          message.name ? (
            <div className={"chatScreen__message"}>
              <Avatar
                className="chatScreen__image"
                alt={message.name}
                src={message.image}
              />
              <p className="chatScreen__text">{message.message}</p>
            </div>
          ) : (
            <div className="chatScreen__message message-right">
              <p className="chatScreen__textUser">{message.message}</p>
            </div>
          )
        )}
      </div>

      <div>
        <form className="chatScreen__input">
          <input
            className="chatScreen__inputField"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            name=""
            id=""
            placeholder="Type a message..."
          />
          <button onClick={handleSend} className="chatScreen__button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
