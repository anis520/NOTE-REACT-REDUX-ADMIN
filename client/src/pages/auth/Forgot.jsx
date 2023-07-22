import "../../../admin/assets/css/style.css";
import "../../../admin/assets/css/bootstrap.min.css";
import logoimg from "../../assets//img/undraw_Forgot_password_re_hxwm.png";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Forgot = () => {
  const [email, setemail] = useState("");
  return (
    <div className="main-wrapper login-body">
      <div className="login-wrapper">
        <div className="container">
          <div className="loginbox">
            <div className="login-left bg-mainbg  ">
              <img
                className="img-fluid rounded-2xl "
                src={logoimg}
                alt="Logo"
              />
            </div>
            <div className="login-right">
              <div className="login-right-wrap">
                <h1>Forgot Password?</h1>
                <p className="account-subtitle">
                  Enter your email to get a password reset link
                </p>

                {/* <!-- Form --> */}
                <div className="form-group">
                  <input
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    className="form-control"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mb-0">
                  <button
                    className="btn btn-primary btn-block text-zinc-800 border-zinc-300 hover:bg-mainbg hover:border-white hover:text-white  focus:bg-mainbg"
                    type="submit"
                  >
                    Reset Password
                  </button>
                </div>
                {/* <!-- /Form --> */}

                <div className="text-center dont-have">
                  Remember your password? <Link to="/login">Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
