import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../index.css";
import myImage from"../assets/logo.png";
import { signUp } from '../store/auth';

interface FormValue {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initFormValue: FormValue = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
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
    if (isEmptyValue(formValue.firstName)) {
      error['firstName'] = 'Firt Name is required';
    }
    if (isEmptyValue(formValue.lastName)) {
      error['lastName'] = 'Last Name is required';
    }
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
    if (isEmptyValue(formValue.confirmPassword)) {
      error['confirmPassword'] = 'Confirm Password is required';
    } else if (formValue.confirmPassword !== formValue.password) {
      error['confirmPassword'] = 'Confirm Password not match';
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
      signUp(formValue.email, formValue.password);
    } else {
      console.log('form invalid');
    }
  };

  return (
    <>
              <header className="header">    
              <div className="header-main">
                <div className="header-main_logo">
                  <img src={myImage} alt=""/> 
                </div>
                <div className="header-main_search">
                <form id="search-box">
                  <input type="text" id="search-text" placeholder="Bạn muốn tìm gì ?" />
                <button id="search-btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                </div>
                <div className="header-main_cart">
                  <Link to='/login' className="link-login">Đăng nhập</Link>
                  <p>Giỏ hàng <i className="fa-solid fa-cart-shopping"></i></p>
                </div>
              </div>
              <div className="header-bottom">
                <ul className='menu'>
                  <li>Trang chủ</li>
                  <li><Link to="/" className="menu_link-productPage">Sản phẩm</Link></li>
                  <li>Giới thiệu</li>
                  <li>Tin tức</li>
                </ul>
              </div>
        </header>
        <div className="register-page">
             <div className="register-form-container">
                 <h1 className="title"> Đăng ký </h1>
                 <form onSubmit={handleSubmit}>
                   <div className="mb-2">
                   <i className="fa-solid fa-user"></i>
                     <input 
                       id="first-name"
                       className="form-control"
                       type="text"
                       name="firstName"
                       placeholder="First name"
                       value ={formValue.firstName}
                       onChange={handleChange}
                     />
                   </div>
                      {formError.firstName && (
                        <div className="error-feedback">{formError.firstName}</div>
                      )}
                   <div className="mb-2">
                     <i className="fa-solid fa-user"></i>
                     <input 
                       id="last-name"
                       className="form-control"
                       type="text"
                       name="lastName"
                       placeholder="Last name"
                       value ={formValue.lastName}
                       onChange={handleChange}
                     />
                    
                   </div>
                      {formError.lastName && (
                        <div className="error-feedback">{formError.lastName}</div>
                      )}
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
                   <div className="mb-2">
                   <i className="fa-solid fa-key"></i>
                     <input 
                       id="confirm-password"
                       className="form-control"
                       type={isPasswordVisible ? 'text' : 'password'}
                       name="confirmPassword"
                       placeholder="Confirm password"
                       value ={formValue.confirmPassword}
                       onChange={handleChange}
                     />
                     <div id="mb-2_eye" onClick={togglePasswordVisibility}>
                        <i className={`fa ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                     </div>
                   </div> 
                      {formError.confirmPassword && (
                        <div className="error-feedback">{formError.confirmPassword}</div>
                      )}
                   <button 
                   type="submit" 
                   className="submit-btn"
                   >
                       Đăng ký
                   </button>
                 </form>        
             </div>  
        </div>

        <footer className="footer">
                <div className="footer-widgets">
                    <div className='footer-widgets_follow'>
                      <p>Fllow Us</p>
                      <ul>
                        <li><i className="fa-brands fa-facebook-square"></i></li>
                        <li><i className="fa-brands fa-instagram"></i></li>
                      </ul>
                    </div>
                    <div className="footer-widgets_instruct">
                      <p>Hướng dẫn</p>
                      <ul>
                        <li>Điều khoản</li>
                        <li>Hướng dẫn mua hàng</li>
                        <li>Chính sách đổi trả hàng</li>
                      </ul>
                    </div>
                    <div className='footer-widgets_Address'>
                      <p>Địa chỉ</p>
                      <ul>
                        <li>Store I: 339 Nguyễn Văn Cừ, P. Ngọc Lâm, Quận Long Biên, Hà Nội</li>
                        <li>Store II: 92 Hai Bà Trưng, P. Cửa Nam, Quận Hoàn Kiếm, Hà Nội</li>
                      </ul>
                    </div>
                </div>
                <div className="absolute-footer">
                    <p>Copyright 2023 © remnetviet.vn</p>
                </div>
        </footer>
    </>
  );
}
