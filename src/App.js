import React, { useEffect } from "react";
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchAllProducts, FormData } from "./store/states/login/Login";
import { useDispatch, useSelector } from "react-redux";
import FormDt from './FormDt'
const App = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.login);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(FormData({ prop: name, value: value }))
  }

  const signIn = () => {
    let data = {
      email: login.email,
      password: login.password,
    }
    dispatch(fetchAllProducts(data)).then((resp) => {
      localStorage.setItem('token', resp?.payload?.token)
    })
  }

  return (
    <main>
      <section className="container p-5">
        <h3>App</h3>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12">
            <input
              type="text"
              className="form-control"
              name='email'
              onChange={handleChange}

            />
            <input
              type="text"
              className="form-control"
              name="password"
              onChange={handleChange}

            />
            <button onClick={signIn}> Login </button>
          </div>
        </div>
        <FormDt />

      </section>
    </main>
  );
};
export default App;
