import React from "react";
import "./header.css";

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
        Welcome to our website, where we are dedicated to advancing the field of artificial intelligence and its numerous applications. With a team of experts and state-of-the-art technology, we are constantly researching and developing innovative AI solutions that can improve various industries and make our lives easier and more efficient. 
        From machine learning and natural language processing to computer vision and robotics, we are constantly pushing the boundaries of what is possible with AI.
        </p>

        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
};

export default Header;
