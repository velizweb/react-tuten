import React from "react";
import PropTypes from "prop-types";
import { Button, Popover } from "antd";
import logo from "./../../assets/images/logo.jpg";

import "./styles.sass";

/**
 * Parameters required for the operation of the header buttons
 * @param {Object} history
 */
const Header = ({ history, userInfo }) => {
  const popoverContent = (
    <>
      <a
        type="dashed"
        icon="poweroff"
        size="large"
        onClick={() => {
          history.push("/logout");
        }}
      >
        Logout
      </a>
    </>
  );

  return (
    <div className="header">
      <div className="header__left">{"TUTEN.CL"}</div>

      <div className="header__right">
        <div>
          <Button
            className="header__right__button"
            type="link"
            icon="search"
            size="large"
          />
        </div>
        <div>
          <Button
            className="header__right__button"
            type="link"
            icon="bell"
            size="large"
          />
        </div>
        <div>
          <Button
            className="header__right__button"
            type="link"
            icon="setting"
            size="large"
          />
        </div>
        <div>
          <div className="header__user__info">
            <Popover
              placement="bottom"
              title=""
              content={popoverContent}
              trigger="click"
            >
              <Button
                type="primary"
                shape="circle"
                icon="user"
                className="header__option__right__buttom"
              />
            </Popover>
            <div className="header__user__info__cont__text">
              <p className="header__user__info__text user-name">{"User"}</p>
              <p className="header__user__info__text header__user__info__name">
                {"Admin"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  history: PropTypes.object.isRequired,
  userInfo: PropTypes.object.isRequired
};

export default Header;
