import React, { useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Form, Button, Message, Modal, Image, Header } from "semantic-ui-react";

import { signup, login } from "../../actions/authActions";
import checkEmail from "../../utils/checkEmail";
import Alert from "../services/Alert";

const AuthForm = ({ signup, login }) => {
  //const [state, setState] = useState(initialState);

  const initialmodal = {
    position: "email",
    template: "input",
    header: "First, enter your email",
    img:
      "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
  };

  const [modal, setModal] = useState(initialmodal);

  const initialUser = {
    email: "",
    userType: "",
    firstName: "",
    lastName: "",
    school: "",
    password: ""
  };

  const [user, setUser] = useState(initialUser);

  const initialInputs = [];
  const initialButtons = [];

  const [inputs, setInputs] = useState(initialInputs);
  const [buttons, setButtons] = useState(initialButtons);

  const emailExists = async email => {
    const res = await checkEmail(email);
    setUser({
      ...user,
      email: email
    });
    if (res) {
      setModal({
        ...modal,
        position: "login",
        template: "input",
        header: "Login",
        img:
          "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
      });
    } else {
      setModal({
        ...modal,
        position: "userType",
        template: "buttons",
        header: "Choose your account type",
        img:
          "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
      });
    }
  };

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
      case "userType":
        newInputs = [];
        newButtons = [
          {
            onClick: () => {
              setUser({
                ...user,
                userType: "student"
              });
            },
            text: "I'm a Student",
            color: "violet"
          },
          {
            onClick: () => {
              setUser({
                ...user,
                userType: "teacher"
              });
            },
            text: "I'm a Teacher",
            color: "purple"
          },
          {
            onClick: () => {
              setUser({
                ...user,
                userType: "school"
              });
            },
            text: "I'm a School Admin",
            color: "pink"
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
  }, [modal.position]);

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    switch (modal.position) {
      case "email":
        emailExists(user.email);
        break;
      case "userType":
        setModal({
          ...modal,
          position: "fullname",
          template: "input",
          header: "What is your name?",
          img:
            "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
        });
        break;
      case "fullname":
        setModal({
          ...modal,
          position: "school",
          template: "input",
          header: "And your school's name?",
          img:
            "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
        });
        break;
      case "school":
        setModal({
          ...modal,
          position: "signup",
          template: "input",
          header: "Sign Up",
          img:
            "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
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
          img:
            "https://images.squarespace-cdn.com/content/v1/5ab01798f407b49611dcb65d/1541343226521-CWES2Z1FOMEG9BIBHSSR/ke17ZwdGBToddI8pDm48kKc-NDPEQRg4ibkK_KN_68UUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2tygO-QF_xose4Xx9IU6iygwfTInKZZFmXM2_r-acTKUKMshLAGzx4R3EDFOm1kBS/SH_stalks.png"
        });
        break;
    }
  };
  let modalTemplate = (
    <Modal.Content>
      <Modal.Description>
        <p>{modal.text}</p>
      </Modal.Description>
      <Image
        size="medium"
        src={modal.img}
        style={{
          paddingBottom: 100,
          display: `block`,
          marginLeft: `auto`,
          marginRight: `auto`
        }}
      />
    </Modal.Content>
  );

  let formTemplate;
  if (modal.template === "input") {
    formTemplate = [
      inputs.map((input, i) => (
        <Form.Input
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
        <Button fluid size="massive" positive type="submit" key={i}>
          {button.text}
        </Button>
      ))
    ];
  } else if (modal.template === "buttons") {
    formTemplate = (
      <Button.Group widths={buttons.length}>
        {buttons.map((button, i) => (
          <Button
            key={i}
            onClick={button.onClick}
            inverted
            size="massive"
            color={button.color}
            type="submit"
          >
            {button.text}
          </Button>
        ))}
      </Button.Group>
    );
  }

  return (
    <Fragment>
      <Header size="huge">{modal.header}</Header>
      <Modal.Content>
        <Form
          size="massive"
          onSubmit={e => {
            handleSubmit(e);
          }}
          autoComplete="off"
        >
          {formTemplate}
        </Form>
      </Modal.Content>
      {modalTemplate}
      <Alert />
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
