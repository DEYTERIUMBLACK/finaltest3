import React from "react";
import "./../../assets/grid.css";
import "./style.css";
const Hero = () => {
  return (
    <div id="hero">
      <div className="container">
        <div className="row">
          <div className="hero_img col-6">
            <img
              src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg"
              alt=""
            />
          </div>
          <div className="hero_p col-6">
            <p className="head">About Tasty</p>
            <h1>Our chef cooks the most delicious food for you</h1>
            <p className="metin">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean. A small river named Duden flows by their
              place and supplies it with the necessary regelialia. It is a
              paradisematic country, in which roasted parts of sentences fly
              into your mouth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
