import React, { FC, useEffect, useState } from "react";
import { Col, Row, Form, Input, Button } from "antd";
import { Container, SectionWrapper } from "../style";
import { AuthWrapper, ColStyled } from "./styled";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { useApiContext } from "../../../context/Api";
import { useAuthContext } from "../../../context/Auth";

const Signin: FC<RouteComponentProps> = ({ history, location }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { auth, setApiHeaders } = useApiContext();
  const { auth: user, setAuth } = useAuthContext();

  const [form] = Form.useForm();
  const { state } = location;

  useEffect(() => {
    if (user.isAuthenticated) {
      // if (state && state.next) {
      //   history.push(state.next);
      // } else {
      //   history.push("/d");
      // }
      history.push("/d");
    }
  }, [user, state, history]);

  const handleSubmit = (values: any) => {
    setIsLoading(true);
    // console.log(values);(

    auth
      .login(values)
      .then((res) => {
        setIsLoading(false);

        console.log(res.data);

        const {
          data: { token },
        } = res.data;

        setAuth({ isAuthenticated: true, credentials: res.data.data });

        setApiHeaders(token);

        localStorage.setItem("userData", JSON.stringify(res.data.data));

        history.push("/d");

        // if (state && state.next) {
        //   history.push(state.next);
        // } else {
        //   history.push("/d");
        // }
      })
      .catch((err: any) => {
        console.log(err.response.data);
        setIsLoading(false);
      });
  };

  return (
    <SectionWrapper>
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <ColStyled>
            <AuthWrapper className="wrapper">
              <div className="auth-header">
                <Row>
                  <Col>
                    <p>Welcome Back</p>
                    <p>Sign in to continue to Oyoyo.</p>
                  </Col>
                </Row>
              </div>

              <Form
                name="login"
                form={form}
                onFinish={handleSubmit}
                layout="vertical"
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "The input is not a valid E-mail!",
                    },
                    {
                      message: "Please input your Email!",
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="Email Address" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    { message: "Please input your password", required: true },
                  ]}
                >
                  <Input.Password placeholder="Password" />
                </Form.Item>

                <div className="auth-form-action">
                  <Checkbox>Remember Me</Checkbox>
                  <NavLink className="forgot-pass-link" to="#">
                    Forgot password?
                  </NavLink>
                </div>

                <Button
                  className="btn-signin"
                  htmlType="submit"
                  type="primary"
                  size="large"
                  loading={isLoading}
                  // onClick={() => history.push("/d")}
                >
                  Sign In
                </Button>
              </Form>

              <div className="text-center">
                <p>
                  © 2020 Oyoyo Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by Insight
                  Physics
                </p>
              </div>
            </AuthWrapper>
          </ColStyled>
        </Row>
      </Container>
    </SectionWrapper>
  );
};

export default Signin;
