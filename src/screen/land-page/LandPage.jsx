import React from "react";
import { Route } from "react-router-dom";
import { Layout } from "antd";
import { withRouter } from "react-router";
import { SessionConsumer } from "./../../providers/session-context";
import Header from "./../../components/header";
import Login from "./../login";
import Logout from "./../logout";
import "./styles.sass";

const { Content } = Layout;

const LandPage = ({ history }) => {
  return (
    <SessionConsumer>
      {({ loggued, updateLoggued, userInfo, updateUserInfo }) =>
        !loggued ? (
          <Login
            updateLoggued={updateLoggued}
            updateUserInfo={updateUserInfo}
          />
        ) : (
          <Layout className="wrapper">
            <Layout>
              <Header userInfo={userInfo} history={history} />
              <Content className="wrapper__body">
                <div className="wrapper__content">
                  <Route
                    path="/logout"
                    render={() => (
                      <Logout updateLoggued={updateLoggued} history={history} />
                    )}
                    exact
                  />
                </div>
              </Content>
            </Layout>
          </Layout>
        )
      }
    </SessionConsumer>
  );
};

export default withRouter(LandPage);
