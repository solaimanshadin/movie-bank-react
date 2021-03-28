import React, {useState} from 'react';
import image from '../images/authentication.svg';
import googleSignInButton from '../images/google-signin.png';
import {  useAuth } from '../customHooks/useAuth';


const Login = () => {
    const [option, setOption] = useState('register');

    const { signIn, signUp, error, googleSignIn} = useAuth() || {};
    const [formData, setFormData] = useState({ email: null, password: null });

    const onChangeHandler = (e) => {
    const key = e.target.name
      setFormData({ ...formData, [key]: e.target.value })
    }

    return (
        <div className="container">

          <div className="row align-items-center" style={{ height: '100vh' }}>

            <>
              {/* Image */}
              <div className="col-md-7 pe-5">
                <img src={image} className="img-fluid" alt="Authentication" />
              </div>

              <div className="col-md-5">
                {
                  error && <p className="text-danger">{error}</p>
                }
                <div className="tab bg-light p-2 rounded mb-3 row">
                  <button onClick={() => setOption('register')} className={`btn ${option === 'register' ? 'btn-primary' : 'btn-light'}  col`}>Register</button>
                  <button onClick={() => setOption('login')} className={`btn ${option === 'login' ? 'btn-primary' : 'btn-light'}  col`}>Login</button>
                </div>
                <form className="form my-4">
                  <div className="mb-3">
                    <input name="email" onChange={(e) => onChangeHandler(e)} type="email" placeholder="Email" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <input name="password" onChange={(e) => onChangeHandler(e)} type="password" placeholder="Password" className="form-control" />
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" />
                    <label className="form-check-label">Remember me</label>
                  </div>
                  <div className="mb-3 d-grid">
                    {
                      option === 'register' ?
                        <button type="button" onClick={ () => signUp(formData.email ,formData.password )} className="btn btn-primary">Register</button>
                        :
                        <button type="button" onClick={() => signIn(formData.email, formData.password)} className="btn btn-primary">Login</button>
                    }
                    <div className="d-flex justify-content-center align-items-center mt-4 text-secondary">
                      <span className="me-2">Or, </span>
                      <img onClick={googleSignIn} style={{ width: 200, cursor: 'pointer' }} src={googleSignInButton} alt="" />
                    </div>

                  </div>
                </form>
              </div>
            </>

          </div>
        </div>
    );
};

export default Login;