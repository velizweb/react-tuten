import { message } from "antd";
import { UserDAO } from "./../../business";

/**
 * @param {Object} form, https://ant.design/components/form/?locale=en-US#header
 * @param {Function} updateLoggued, Update the session status.
 */
const useFormLoginLogic = (form, updateLoggued, updateUserInfo) => {
  /**
   * Login.
   * @param {Object} e, Event triggered by the form.
   */
  const onSubmit = e => {
    e.preventDefault();
    form.validateFields(async (err, { username, password }) => {
      if (err) return;

      const response = await UserDAO.login(username, password);

      if (response.success) {
        updateUserInfo(response);
        return updateLoggued(true);
      }

      return message.warning("Clave incorrecta");
    });
  };

  const { getFieldDecorator } = form;

  return { onSubmit, getFieldDecorator };
};

export default useFormLoginLogic;
