import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import myImage from"../assets/logo.png";
import { Login } from '../store/login';

interface FormValue {
    email: string;
    password: string;
  }
const initFormValue: FormValue ={
    email: "",
    password: "",
  };
  const isEmptyValue = (value :string) => {
    return !value || value.trim().length < 1;
  }
  const isEmailValid = (email:string) => {
    return /^\w+([.-]?\w+)*@\w([.-]?\w+)*(\.\w{2,3})+$/.test(email);
  }

export default function LoginAccount(){
    const [formValue, setFormValue] = useState<FormValue>(initFormValue);
    const [formError, setFormError] = useState<Record<string, string>>({});
    const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
    
    const validateForm = () =>{
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
    }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;
        setFormValue({
          ...formValue,
          [name]: value,
        });
      };
    
      const nav = useNavigate();
      const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (validateForm()) {
          console.log('form value', formValue);
            
        } else {
          console.log('form invalid');
        }
      };

      const handleLogin = async ()=>{
            try {
              await Login(formValue.email, formValue.password);
              nav('/');
            } catch (error) {
              alert("Tài khoản và mật khẩu không chính xác");
            }
      }
    return(
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
                 <h1 className="title"> Đăng Nhập </h1>
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
                   onClick={handleLogin}
                   >
                       Đăng nhập
                   </button>
                   <div className="register">
                        <Link to="/register" className="register_link">Đăng ký ?</Link>
                   </div>
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
    )
}