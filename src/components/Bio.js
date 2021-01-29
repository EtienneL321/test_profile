import React, { Component } from "react";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";
import "./Bio.css";

class Bio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      value:
        "Hi, my name is Etienne Lagace, I was both in 2001 November 14th and I am a student at the University of Calgary currently in my second year studying software engineering",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert("Your changes have been saved ");
    event.preventDefault();
  };

  render() {
    return (
      <div className="Settings">
        <Button
          className="Settings-bio"
          type="primary"
          onClick={this.showModal}
        >
          Edit Bio
        </Button>
        <Modal
          title="Settings"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <form onSubmit={this.handleSubmit}>
            <label>
              Bio:
              <textarea value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </Modal>
        <div>
          <h2>{this.state.value}</h2>
        </div>
      </div>
    );
  }
}

export default Bio;
