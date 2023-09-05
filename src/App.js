import React, { useState } from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faTelegram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
      <div className="footer-info">
        <p>OpenWeather Links:</p>
        <a href="https://www.facebook.com/groups/270748973021342">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a target="_blank" href="https://twitter.com/OpenWeatherMap">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a target="_blank" href="https://www.linkedin.com/company/9816754">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a target="_blank" href="https://t.me/openweathermap">
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a target="_blank" href="https://github.com/openweathermap">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </React.Fragment>
  );
}

export default App;
