import { fetchLogin } from "./../api";

export default class UserDAO {
  /**
   * Evaluate the login response.
   * @param {String} email, Email of the user.
   * @param {String} password, Secret password of the user.
   * @returns {Object}
   */
  static async login(email, password) {
    let response = {};
    try {
      const data = await fetchLogin(email, password);
      response = { ...data, success: true };
    } catch (error) {
      response.success = false;
    }

    return response;
  }
}
