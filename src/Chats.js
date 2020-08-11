import React from "react";
import Chat from "./Chat";

import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Sarah"
        message="Hey! How are you :D"
        timestamp="35 seconds ago"
        profilePic="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg"
      />
      <Chat
        name="Ellen"
        message="Whats up ♥?"
        timestamp="55 minutes ago"
        profilePic="https://static1.ohman.vn/YanNews/2167221/202002/loat-avatar-danh-cho-cap-doi-khien-hoi-fa-khoc-rong-20200216-023730.jpg"
      />
      <Chat
        name="Sandra"
        message="Ola!"
        timestamp="3 days ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQueftcOnTx9tCGctJ1mg3Lu6A9trUJBHULNw&usqp=CAU"
      />
      <Chat
        name="Natasha"
        message="Oops there is he is..."
        timestamp="1 week ago"
        profilePic="https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-rabbit-ears-boys-avatar-cartoon-cute-png-image_4565511.jpg"
      />
    </div>
  );
}

export default Chats;
