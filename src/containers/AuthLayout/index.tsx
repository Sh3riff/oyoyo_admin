import React, { FunctionComponent } from "react";
import { Layout, Col, Row } from "antd";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/img/oyoyo_logo_light.png";
import { Div, FooterStyled, HeaderStyled, LayoutStyled } from "./styled";
import TopNav from "./TopNav";

const { Content } = Layout;

const AuthLayout: FunctionComponent = ({ children }) => {
  return (
    <Div>
      <LayoutStyled className="layout nonAuthLayout">
        <HeaderStyled>
          <Row
            style={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <div className="navItem-left">
              <Link className="logo" to="/">
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            <div className="navItem-right"></div>
          </Row>
        </HeaderStyled>

        <TopNav />

        <Content
          style={{
            padding: "0 3.125rem",
            background: "#fff",
            minHeight: "calc(100vh - (128px + 46px))",
            marginTop: "110px",
          }}
        >
          {children}
        </Content>

        <FooterStyled className="admin-footer">
          <Row>
            <Col md={12} xs={24}>
              <span className="admin-footer__copyright">
                2020 ©, Copyright, OyoyoNG
              </span>
            </Col>

            <Col md={12} xs={24}>
              <div className="admin-footer__links">
                <NavLink to="#">Design & Develop by Insight Physics</NavLink>
              </div>
            </Col>
          </Row>
        </FooterStyled>
      </LayoutStyled>
    </Div>
  );
};

export default AuthLayout;
