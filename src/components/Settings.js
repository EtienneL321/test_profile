import React, { Component } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import "./Settings.css";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      imagesArray: [
        props.femaleProfile,
        props.maleProfile,
        props.colours,
        props.cycling,
        props.keyboard,
        props.dog,
        props.flowers,
        props.happyFace,
        props.hawk,
        props.homer,
        props.horizonFace,
        props.lamp,
        props.outdoor,
        props.parrot,
        props.rainy,
        props.sunsetFace,
        props.sunsetHat,
      ],
    };
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const profileImageMapper = this.state.imagesArray.map((image, index) => {
      return (
        <img
          src={image}
          onClick={() => this.props.HandleProfileChange(image)}
          className="Settings-profile"
          alt="Profile Picture"
        />
      );
    });

    const backgroundImageMapper = this.state.imagesArray.map((image, index) => {
      return (
        <img
          src={image}
          onClick={() => this.props.HandleBackgroundChange(image)}
          className="Settings-background"
          alt="Background Picture"
        />
      );
    });

    return (
      <div className="Settings">
        <Button
          className="Settings-picture"
          type="primary"
          onClick={this.showModal}
        >
          Edit Picture
        </Button>
        <Modal
          title="Settings"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <h2>Profile Pictures</h2>
          {profileImageMapper}
          <h2>Background Pictures</h2>
          {backgroundImageMapper}
        </Modal>
      </div>
    );
  }
}

export default Settings;
