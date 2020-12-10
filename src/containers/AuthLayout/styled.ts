import { Layout, Button } from "antd";
import { Link } from "react-router-dom";
import Styled from "styled-components";
const { Header, Footer } = Layout;

const Div = Styled.div`
    background: #fff
`;

const LayoutStyled = Styled(Layout)`
    & header.ant-layout-header {
        box-shadow: 0px 2px 8px rgba(53,55,81,0.04);
        padding: 0 3.125rem;
    }


    .topNav {
      padding: 0 3.125rem;
      background-color: ${({ theme }) => theme["primary-color"]};
      color: hsla(0,0%,100%,.6);
      margin-top: 4rem;

      box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
      position: fixed;
      left: 0;
      right: 0;
      z-index: 100;

      .ant-menu {
        background-color: none;
      }
    }
`;

const HeaderStyled = Styled(Header)`  
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background: #fff

    .ant-layout-header {
        min-height: 64px;
        /* box-shadow: 0px 2px 8px rgba(53, 55, 81, 0.04) !important; */
        padding: 0.2rem 3rem;

    }

    .navItem-left {
      .logo {
        width: 4.4rem
      }      

      img {
        width: 100%;
        height: auto;
      }
    }

    .navItem-left,
    .navItem-right {
        display: flex;
        align-items: center;
    }   
    
    .ant-breadcrumb {
        margin-left: 5rem;
        color: #000000;
        font-weight: 700;
    }

    .account-btn {
        margin-left: 2rem
    }
`;

const FooterStyled = Styled(Footer)`

  &.ant-layout-footer {
    height: 64px;
    background: #F2F2F2;
    color: #5F6368;
    padding-left: 3.125rem;
    padding-right: 3.125rem;
  }
 
          span.admin-footer__copyright{
              display: inline-block;
              width: 100%;
              color: ${({ theme }) => theme["light-color"]};
              @media only screen and (max-width: 767px){
                  text-align: center;
                  margin-bottom: 10px;
              }
          }
          div.admin-footer__links{
              text-align: right;
              @media only screen and (max-width: 767px){
                  text-align: center;
              }
              a{
                  color: ${({ theme }) => theme["light-color"]};
                  margin-left: 15px;
                  
                  &:hover{
                      color: ${({ theme }) => theme["primary-color"]};
                  }
              }
          }
      
`;

const BusinessButton = Styled(Button)`
  border: ${({ theme }) => `solid 1px ${theme["primary-color"]}`}
  color: ${({ theme }) => theme["primary-color"]}
  margin-right: 2rem;
`;

const ButtonStyled = Styled(Button)`
  background: #F7F9FA
  color: #000000;
  font-weight: 700;
  border: 0;

  &:hover, &:active {
   background: #F7F9FA
  color: #000000;
  font-weight: 700;
  border: 0;
  }
`;

const LinkStyled = Styled(Link)`
  background: #F7F9FA; 

  
  &:first-child {
    margin-bottom: 0.625rem
  }
  
  &:hover {
    background:  #F7F9FA;
  }

  span {
    display: flex;
    align-items: center;
    color: #000
    font-weight: bold;
    font-size: 1rem
  }
`;

export {
  BusinessButton,
  ButtonStyled,
  LinkStyled,
  Div,
  LayoutStyled,
  HeaderStyled,
  FooterStyled,
};
