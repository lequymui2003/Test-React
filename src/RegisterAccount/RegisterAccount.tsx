import React, { useState } from 'react';
import img from "../assets/imgRegister-page.jpg";
import "../index.css";
import { signUp } from '../store/auth';
import { useNavigate } from 'react-router-dom';

interface FormValue {
  email: string;
  password: string;
}

const initFormValue: FormValue = {
  email: '',
  password: '',
};

const isEmptyValue = (value: string) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email: string) => {
  return /^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/.test(email);
};

export default function RegisterPage() {
  const [formValue, setFormValue] = useState<FormValue>(initFormValue);
  const [formError, setFormError] = useState<Record<string, string>>({});
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const validateForm = () => {
    const error: Record<string, string> = {};
    if (isEmptyValue(formValue.email)) {
      error['email'] = 'Email is required';
    } else {
      if (!isEmailValid(formValue.email)) {
        error['email'] = 'Email is invalid';
      }
    }
    if (isEmptyValue(formValue.password)) {
      error['password'] = 'Password is required';
    }
    setFormError(error);
    return Object.keys(error).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('form value', formValue);
    } else {
      console.log('form invalid');
    }
  };

  const nav = useNavigate();
  const handleSignUp = async() =>{
    try {
      await signUp(formValue.email, formValue.password);
      nav('/')
    } catch (error) {
      alert("Đăng ký chưa thành công");
    }
  } 

  return (
    <>
        <div className="register-page">
            <div className="register-page-img">
              <img src={img} alt='' />
             </div>
             <div className="register-form-container">
                 <h1 className="title"> Đăng ký </h1>
                 <form onSubmit={handleSubmit}>
                   <div className="mb-2">
                   <i className="fa-solid fa-envelope"></i>
                     <input 
                       id="email"
                       className="form-control"
                       type="text"
                       name="email"
                       placeholder="Email"
                       value ={formValue.email}
                       onChange={handleChange}
                     />
                     
                   </div>
                      {formError.email && (
                        <div className="error-feedback">{formError.email}</div>
                      )}
                   <div className="mb-2">
                     <i className="fa-solid fa-key"></i>
                     <input 
                       id="password"
                       className="form-control"
                       type={isPasswordVisible ? 'text' : 'password'}
                       name="password"
                       placeholder="Password"
                       value ={formValue.password}
                       onChange={handleChange}
                     />
                     <div id="mb-2_eye" onClick={togglePasswordVisibility}>
                        <i className={`fa ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                     </div>
                   </div>
                      {formError.password && (
                        <div className="error-feedback">{formError.password}</div>
                      )}
                   <button 
                   type="submit" 
                   className="submit-btn"
                   onClick={handleSignUp}
                   >
                       Đăng ký
                   </button>
                 </form>        
             </div>  
        </div>
    </>
  );
}
