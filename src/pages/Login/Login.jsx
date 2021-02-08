import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Login.css";
import { connect } from "react-redux";
import { loginUserWithGoogle, loginUserWithGithub } from "../../redux/users/usersActions";



class Login extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.userData !== prevProps.userData) {
      this.props.history.push("/");
    }
  }
  render() {
    const { loginUserWithGoogle, loginUserWithGithub} = this.props;

    return (
      <div className="d-flex align-items-center justify-content-center container">
        <div className='centered-item card p-5'>
        <Link to="/">
          <img src={Logo} alt="logo" className="mb-5" />
        </Link>

        <h1 className="h2">Login</h1>
        <p>Choose a platform for authentification:</p>
        <div className="buttons">
        <button
          className="btn btn-outline-light mx-3"
          onClick={() => loginUserWithGoogle()}
        >
          {/* For mysterious reasons importing ReactComponents as ... didn't work  for this images */}
          <img className='login-icons' src={require('../../assets/icons/google-brands.svg')} alt=""/>
        </button>

        <button
          className="btn btn-outline-light mx-3"
          onClick={() => loginUserWithGithub()}
        >
          <img className='login-icons' src={require('../../assets/icons/github-brands.svg')} alt=""/>
        </button>
        </div>

        <Link className='mt-4' to='/'> <small>← Back Home</small></Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.user.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loginUserWithGoogle: () => {
      dispatch(loginUserWithGoogle());
    },
    loginUserWithGithub: () => {
      dispatch(loginUserWithGithub());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
