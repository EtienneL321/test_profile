import React, { Component } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import colours from "./images/colours.jpg";
import cycling from "./images/cycling.jpg";
import keyboard from "./images/keyboard.jpg";
import dog from "./images/dog.jpg";
import flowers from "./images/flowers.jpg";
import happyFace from "./images/happyFace.jpg";
import hawk from "./images/hawk.jpg";
import homer from "./images/homer.gif";
import horizonFace from "./images/horizonFace.jpg";
import lamp from "./images/lamp.jpg";
import outdoor from "./images/outdoor.jpg";
import parrot from "./images/parrot.jpg";
import rainy from "./images/rainy.jpg";
import sunsetFace from "./images/sunsetFace.jpg";
import sunsetHat from "./images/sunsetHat.jpg";
import "antd/dist/antd.css";
import "./App.css";
import Settings from "./components/Settings";
import Bio from "./components/Bio";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileImage: "",
      backgroundImage: "",
    };
  }

  HandleProfileChange = (profileImage) => {
    this.setState({
      profileImage,
    });
  };

  HandleBackgroundChange = (backgroundImage) => {
    this.setState({
      backgroundImage,
    });
  };

  render() {
    return (
      <div className="Profile">
        <div className="Profile-images">
          <img
            src={this.state.backgroundImage}
            className="Background-picture"
            alt="Background Picture"
          />
          <img
            src={this.state.profileImage}
            className="Profile-picture"
            alt="Profile Picture"
          />
        </div>
        <div className="Personal-information">
          <h1>Etienne Lagace</h1>
          <Settings
            HandleBackgroundChange={this.HandleBackgroundChange}
            HandleProfileChange={this.HandleProfileChange}
            femaleProfile={femaleProfile}
            maleProfile={maleProfile}
            colours={colours}
            cycling={cycling}
            keyboard={keyboard}
            dog={dog}
            flowers={flowers}
            happyFace={happyFace}
            hawk={hawk}
            homer={homer}
            horizonFace={horizonFace}
            lamp={lamp}
            outdoor={outdoor}
            parrot={parrot}
            rainy={rainy}
            sunsetFace={sunsetFace}
            sunsetHat={sunsetHat}
          />
          <Bio />
          <div className="Social-status"></div>
        </div>
      </div>
    );
  }
}

export default Profile;
