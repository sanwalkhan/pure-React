import React from "react";
import ReactDOM from "react-dom";

import Avatar from "./avatar"
import Message from "./message"
import Author from "./author" 
import LikeButton from "./btns/likebtn";
import ReplyButton from "./btns/replybtn";
import MoreOptionsButton from "./btns/moreoptionsbtn"
import RetweetButton from "./btns/retweetbtn"
import "./style.css";

function Tweet(){
    
    return(
    
    <div className="tweet">
        <Avatar />
    <div className="content">
        <Author />
        <Message />
        <div className="buttons">
            <ReplyButton />
            <RetweetButton />
            <LikeButton />
            <MoreOptionsButton />
        </div>
    </div>
    </div>
    )
}  


ReactDOM.render(<Tweet />,
    document.querySelector("#root"))

    