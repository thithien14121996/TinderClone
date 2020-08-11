import React from "react";
import "./App.css";
import Header from "./Header";
import Chats from "./Chats";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}

        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
{
  /*Tinder Cards */
}

{
  /*Buttons below tinder cards */
}

{
  /*Chats screen */
}

{
  /*Individual chat screen */
}
