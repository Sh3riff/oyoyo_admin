import Styled from "styled-components";

const TopNavStyled = Styled.nav`

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
    background-color: inherit;

    .ant-menu-item a {
      color: #fff;
    }
  }

  .ant-menu.ant-menu-horizontal{
            display: flex;
            align-items: center;
            margin: 0 -16px;
            li.ant-menu-submenu{
                margin: 0 16px;
            }
            .ant-menu-submenu{
                &.ant-menu-submenu-active,
                &.ant-menu-submenu-selected,
                &.ant-menu-submenu-open{
                    .ant-menu-submenu-title{
                        color: #fff;
                        svg,
                        i{
                            color: #fff;
                        }
                    }
                }
                .ant-menu-submenu-title{
                    font-size: 14px;
                    font-weight: 500;
                    color: #fff;
                    svg,
                    i{
                      color: #fff;

                    }
                    .ant-menu-submenu-arrow{
                        font-family: "FontAwesome";
                        font-style: normal;
                        margin-left: 6px;

                        &:after{
                            color: #9299B8;
                            content: '\f107';
                            background-color: transparent;
                        }
                    }
                }
            }
        }

`;

export { TopNavStyled };
