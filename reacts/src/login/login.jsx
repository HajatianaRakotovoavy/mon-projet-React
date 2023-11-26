import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import './login.css'



const Login = () => {

    const navigate = useNavigate();




return(

    <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={Yup.object({
          email: Yup.string()
            .required(<p style={{ color: "aliceblue" }}>Entrer votre adresse email</p>),
          password: Yup.string()
            .min(6, <p style={{ color: "aliceblue" }}>Le mot de passe est au moin 6 caractères</p>)
            .required(<p style={{ color: "aliceblue" }}>Password is required</p>),
        })}
        onSubmit={(values, { setSubmitting }) => {
          fetch('/login/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
          })
          .then((response) => {
            if (response.ok) {
              navigate('/membre'); // Rediriger l'utilisateur vers la page membre
              window.location.reload(); // Recharger la page
            } else {
              // Gérer l'erreur de connexion
              response.json().then((error) => {
                alert(`Erreur de connexion : ${error.message}`);
              });
            }
            
          })
          .catch((err) => {
            console.error('Failed to fetch data:', err);
          });
        }}
      >
         

        <div className='to1'>
               <div className="box1">
                        <Form action="" className="form1">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <div className="form-inner1">
                            <h2>Login</h2>
                            <div className="content1">
                            <div>
                            <label className="lab" htmlFor="email">Email:</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                            </div>

                            <div>
                            <label className="lab" htmlFor="password">Password:</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                            </div>
                        
                            <button type="submit" className="btn2">Connecter</button>
                            {/* <NavLink className="nav" exact to="membre" >Voir liste des membres????</NavLink>  */}
                            </div>
                        </div>
                        </Form>
               </div>
        </div>
    </Formik>
       
            );
};

export default Login