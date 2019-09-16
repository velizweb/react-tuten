import React, { useEffect } from "react";
import PropTypes from "prop-types";

/**
 * @param {Function} updateLoggued, Change the state of the session.
 * @param {object} history, React Router Object.
 */
const Logout = ({ updateLoggued, history }) => {
  useEffect(() => {
    updateLoggued(false);
    history.push("/");
  }, []);
  return <></>;
};

Logout.propTypes = {
  updateLoggued: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

export default Logout;
