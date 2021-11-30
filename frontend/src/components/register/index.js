import React from "react";
import "./styles.css";

const axios = require("axios");

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.email = "";
    this.password = "";
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.finishRequest = this.finishRequest.bind(this);
  }

  handleChangeEmail(event) {
    this.email = event.target.value;
  }

  handleChangePassword(event) {
    this.password = event.target.value;
  }

  send_request = (email, password) => {
    try {
      return axios.post("http://localhost:5000/register", {
        email: email,
        password: password,
      });
    } catch (error) {
      console.error(error);
    }
  };

  finishRequest() {
    this.send_request(this.email, this.password).then((response) => {
      if (response["data"] === "Added") {
        alert("Usuario feito!!!");
      }
    });
  }

  render() {
    return (
      <div className="register-main">
        <h4>Insira o email para se registrar</h4>
        <input
          onChange={this.handleChangeEmail}
          type="email"
          placeholder="email@example.com"
        ></input>
        <h4>Insira a senha para se registrar</h4>
        <input
          onChange={this.handleChangePassword}
          type="password"
          placeholder="password"
        ></input>
        <button onClick={this.finishRequest}> Confirmar </button>
      </div>
    );
  }
}
