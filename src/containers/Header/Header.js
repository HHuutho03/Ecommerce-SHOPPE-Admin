import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu, doctorMenu } from "./menuApp";
import "./Header.scss";
import { languages, USER_ROLE } from "../../utils/constant";
import { FormattedMessage } from "react-intl";
import _ from "lodash";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuApp: [],
    };
  }
  componentDidMount() {
    let { userInfo } = this.props;
    let menu = [];
    if (userInfo && !_.isEmpty(userInfo)) {
      let role = userInfo.roleId;
      if (role === USER_ROLE.ADMIN) {
        menu = adminMenu;
      }
      if (role === USER_ROLE.DOCTOR) {
        menu = doctorMenu;
      }
    }
    this.setState({
      menuApp: menu,
    });
  }
  HandleChangeLanguage = (language) => {
    this.props.changeLanguageAppRedux(language);
  };

  render() {
    const { processLogout, language, userInfo } = this.props;
    return (
      // <div className="header-container">
      //   {/* thanh navigator */}
      //   <div className="header-tabs-container">
      //     <Navigator menus={this.state.menuApp} />
      //   </div>
      //   <div className="languages">
      //     <span className="welcome">
      //       <FormattedMessage id="home-header.welcome" />{" "}
      //       {userInfo && userInfo.firstName ? userInfo.firstName : ""}
      //     </span>
      //     <span
      //       className={
      //         language === languages.VI ? "language-vi active" : "language-vi"
      //       }
      //       onClick={() => this.HandleChangeLanguage(languages.VI)}
      //     >
      //       VN
      //     </span>
      //     <span
      //       className={
      //         language === languages.EN ? "language-en active" : "language-en"
      //       }
      //       onClick={() => this.HandleChangeLanguage(languages.EN)}
      //     >
      //       EN
      //     </span>

      //     <div
      //       className="btn btn-logout"
      //       onClick={processLogout}
      //       title="Log out"
      //     >
      //       <i className="fas fa-sign-out-alt"></i>
      //     </div>
      //   </div>
      //   {/* nút logout */}
      // </div>
      <section className="hdl-header sticky-top">
        <div className="container-fluid">
          <ul className="menutop">
            <li>
              <span>
                <i class="fas fa-store-alt"></i> Shop Thời trang
              </span>
            </li>
            <li className="text-phai" onClick={processLogout}>
              <i className="fas fa-sign-out-alt">Thoát</i>
            </li>
            <li className="text-phai">
              <span style={{ display: "flex" }}>
                <i className="fa fa-user" aria-hidden="true" style={{ marginTop: "5px", marginRight: "3px" }}></i>
                <div>Chào</div>
                <span className="span-title">{userInfo && userInfo.firstName ? `${userInfo.firstName}  ${userInfo.lastName}` : ""}</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    userInfo: state.user.userInfo,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processLogout: () => dispatch(actions.processLogout()),
    changeLanguageAppRedux: (language) => dispatch(actions.changeLanguageApp(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
