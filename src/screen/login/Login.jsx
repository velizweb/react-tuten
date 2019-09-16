import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "./styles.sass";
import useFormLoginLogic from "./LoginLogic";
import PropTypes from "prop-types";
import logo from "./../../assets/images/logo.jpg";

/**
 * @param {Object} form, https://ant.design/components/form/?locale=en-US#header
 * @param {Function} updateLoggued, Update the session status.
 */
const FormLogin = ({ form, updateLoggued, updateUserInfo }) => {
  const { onSubmit, getFieldDecorator } = useFormLoginLogic(
    form,
    updateLoggued,
    updateUserInfo
  );

  return (
    <div className="login__container">
      <div className="logo">
        <div className="logo__ctn__logo">
          <img className="logo__img" src={logo} />
        </div>
      </div>
      <div>
        <h4 className="login__container__h4">Inicio de sesión</h4>
      </div>
      <Form onSubmit={onSubmit}>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [
              { required: true, message: "Debe de ingresar su username!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              autoComplete="username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [
              { required: true, message: "Debe de ingresar su Password!" }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            className="login__container__form__button"
            type="primary"
            htmlType="submit"
          >
            Iniciar Sesión
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

PropTypes.formLogin = {
  form: PropTypes.object,
  updateLoggued: PropTypes.func.isRequired
};

export default Form.create({ name: "normal_login" })(FormLogin);
