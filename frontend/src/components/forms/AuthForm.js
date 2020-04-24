import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";

import {
  Form,
  Button,
  Modal,
  Image,
  Responsive,
  Divider
} from "semantic-ui-react";

import { signup, login } from "../../actions/authActions";
import Alert from "../services/Alert";

import "../../css/AuthForm.css";
// import SH_heads from "../../img/SH_heads.png";
import SH_eyes from "../../img/SH_eyes.png";

import checkEmail from "../../utils/checkEmail";

import { googleSignIn } from "../../actions/authActions";

const AuthForm = ({ signup, login }) => {
  const dispatch = useDispatch();
  const initialmodal = {
    position: "email",
    template: "input",
    header: "First, enter your email",
    img: SH_eyes
    //img:
    //"https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
  };

  const [modal, setModal] = useState(initialmodal);

  const initialUser = {
    email: "",
    firstName: "",
    lastName: "",
    role: "",
    school: "",
    password: ""
  };

  const [user, setUser] = useState(initialUser);

  const initialInputs = [];
  const initialButtons = [];

  const [inputs, setInputs] = useState(initialInputs);
  const [buttons, setButtons] = useState(initialButtons);

  useEffect(() => {
    let newInputs;
    let newButtons;
    switch (modal.position) {
      case "email":
        newInputs = [
          {
            name: "email",
            type: "input",
            placeholder: "name@example.com"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "role":
        newInputs = [];
        newButtons = [
          {
            onClick: () => {
              setUser({
                ...user,
                role: "student"
              });
            },
            text: "I'm a Student"
          },
          {
            onClick: () => {
              setUser({
                ...user,
                role: "teacher"
              });
            },
            text: "I'm a Teacher"
          },
          {
            onClick: () => {
              setUser({
                ...user,
                role: "school"
              });
            },
            text: "I'm a School Admin"
          }
        ];
        break;
      case "fullname":
        newInputs = [
          {
            name: "firstName",
            label: "First Name",
            type: "input",
            placeholder: "Barack"
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "input",
            placeholder: "Obama"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "school":
        newInputs = [
          {
            name: "school",
            label: "What's the name of your school",
            type: "input",
            placeholder: "Harvard"
          }
        ];
        newButtons = [
          {
            text: "Confirm"
          }
        ];
        break;
      case "signup":
      case "login":
        newInputs = [
          {
            name: "password",
            label: "Enter your password",
            type: "password",
            placeholder: "***"
          }
        ];
        newButtons = [
          {
            text: "Start Tinkering"
          }
        ];
        break;
      default:
    }
    setInputs(newInputs);
    setButtons(newButtons);
  }, [modal.position, user]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const emailExists = async email => {
    try {
      const exists = await checkEmail(email);
      if (exists) {
        setModal({
          ...modal,
          position: "login",
          template: "input",
          header: "Login",
          img: SH_eyes
          //img:
          //"https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
        });
      } else {
        setModal({
          ...modal,
          position: "role",
          template: "buttons",
          header: "Choose your account type",
          img: SH_eyes
          //img:
          //"https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
        });
      }
      setUser({
        ...user,
        email: user.email
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    switch (modal.position) {
      case "email":
        emailExists(user.email);
        break;
      case "role":
        setModal({
          ...modal,
          position: "fullname",
          template: "input",
          header: "What is your name?",
          img: SH_eyes
        });
        break;
      case "fullname":
        setModal({
          ...modal,
          position: "school",
          template: "input",
          header: "And your school's name?",
          img: SH_eyes
        });
        break;
      case "school":
        setModal({
          ...modal,
          position: "signup",
          template: "input",
          header: "Sign Up",
          img: SH_eyes
        });
        break;
      case "signup":
        signup(user);
        break;
      case "login":
        login({
          email: user.email,
          password: user.password
        });
        break;
      case "another":
        break;
      default:
        setModal({
          ...modal,
          position: "email",
          template: "input",
          header: "First, enter your email",
          img: "./img/SH_heads.png"
        });
        break;
    }
  };

  let modalTemplate = (
    <Fragment>
      <Modal.Description>
        <p>{modal.text}</p>
      </Modal.Description>
      <Modal.Description>
        {modal.position === "email" ? (
          <Fragment>
            <Divider
              style={{
                margin: "6% 0",
                fontFamily: "Roboto Mono",
                color: "#9C9C9C"
              }}
              horizontal
            >
              Or
            </Divider>
            <Button
              id="google-button"
              color="teal"
              content="Sign In with Google"
              onClick={() => dispatch(googleSignIn())}
            />
          </Fragment>
        ) : null}
      </Modal.Description>
      <Modal.Content image>
        <Image
          size="medium"
          src={modal.img}
          style={{
            //paddingBottom: 100,
            display: `block`,
            marginTop: `1em`,
            marginLeft: `auto`,
            marginRight: `auto`,
            marginBottom: `-1.5em`
          }}
        />
      </Modal.Content>
    </Fragment>
  );

  let formTemplate;
  if (modal.template === "input") {
    formTemplate = [
      inputs.map((input, i) => (
        <Form.Input
          id="input-auth"
          key={i}
          label={input.label}
          type={input.type}
          placeholder={input.placeholder}
          name={input.name}
          value={user[input.name] || ""}
          onChange={handleChange}
        />
      )),
      buttons.map((button, i) => (
        <Button
          id="button-auth"
          fluid
          size="big"
          positive
          type="submit"
          key={i}
        >
          {button.text}
        </Button>
      ))
    ];
  } else if (modal.template === "buttons") {
    formTemplate = (
      <Fragment>
        <Responsive minWidth={950}>
          <Button.Group widths={buttons.length}>
            {buttons.map((button, i) => (
              <Fragment key={i}>
                <Button
                  id="user-type-button"
                  onClick={button.onClick}
                  inverted
                  size="big"
                  color={button.color}
                  type="submit"
                >
                  {button.text}
                </Button>
                {i + 1 < buttons.length ? <Button.Or /> : null}
              </Fragment>
            ))}
          </Button.Group>
        </Responsive>
        <Responsive maxWidth={950}>
          <Button.Group vertical widths={buttons.length}>
            {buttons.map((button, i) => (
              <Fragment key={i}>
                <Button
                  id="user-type-button"
                  onClick={button.onClick}
                  inverted
                  size="big"
                  color={button.color}
                  type="submit"
                >
                  {button.text}
                </Button>
                {i + 1 < buttons.length ? <Button.Or /> : null}
              </Fragment>
            ))}
          </Button.Group>
        </Responsive>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <Modal.Header size="big">{modal.header}</Modal.Header>
      <Modal.Content>
        <Form
          size="big"
          onSubmit={e => {
            handleSubmit(e);
          }}
          autoComplete="off"
        >
          {formTemplate}
        </Form>
        <Alert />
        {modalTemplate}
      </Modal.Content>
    </Fragment>
  );
};

AuthForm.propTypes = {
  signup: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = null;

const mapDispatchToProps = {
  signup,
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
