// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import myImage from "../assets/logo.png";
import MyImage from "../assets/img-product_remgiadinh/remgiadinh-phongngu2-300x300.jpg";
import MyImage2 from "../assets/img-product_remgiadinh/remgiadinh-phongkhach.jpg";
import MyImage3 from "../assets/img-product_remgiadinh/remgiadinh-phongkhach2.jpg";
import MyImage4 from "../assets/img-product_remgiadinh/remgiadinh-phongbep.jpg";

export default function CurtainFamilyPage(){
    
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
        
        <section className="section-product">
            <div className="section-product-header">
                <div className='page-title'>
                    <p>Trang chủ / Sản phẩm</p>
                </div>
            </div>
            <div className="content-product">
                <div className="catalog-sidebar">
                    <span className="catalog-sidebar_title">Danh mục sản phẩm</span>
                    <div className="is-driver"></div>
                    <ul className="product-categories">
                        <li><Link to="/" className="product-categories_children">Rèm văn phòng</Link></li>
                        <li><Link to="/curtainFamily" className="product-categories_children">Rèm gia đình</Link></li>
                        <li><Link to="/foldedcurtain" className="product-categories_children">Rèm cuốn</Link></li>
                    </ul>
                </div>
                <div className="catalog-product">
                    <div className="product-small">
                        <div className="product-small_img">
                            <img src={MyImage} alt="img" />
                            <div className="quickly-view">
                                <p>Xem ngay</p>
                            </div>
                        </div>
                        <div className="product-small_category">
                            <p>Rèm gia đình</p>
                        </div>
                        <div className="product-small_name">
                            <p>Rèm cửa vải chất thô chống nắng tốt mã DIM15-03</p>
                        </div>
                        <div className="product-small_price">
                            <p>550,000₫</p>
                        </div>
                    </div>
                    <div className="product-small">
                        <div className="product-small_img">
                            <img src={MyImage2} alt="img" />
                            <div className="quickly-view">
                                <p>Xem ngay</p>
                            </div>
                        </div>
                        <div className="product-small_category">
                            <p>Rèm gia đình</p>
                        </div>
                        <div className="product-small_name">
                            <p>Rèm cửa vải phòng khách chống nắng tốt</p>
                        </div>
                        <div className="product-small_price">
                            <p>550,000₫</p>
                        </div>
                    </div>
                    <div className="product-small">
                        <div className="product-small_img">
                            <img src={MyImage3} alt="img" />
                            <div className="quickly-view">
                                <p>Xem ngay</p>
                            </div>
                        </div>
                        <div className="product-small_category">
                            <p>Rèm gia đình</p>
                        </div>
                        <div className="product-small_name">
                            <p>Rèm cửa vải phòng khách đẹp, cản nắng tốt</p>
                        </div>
                        <div className="product-small_price">
                            <p>550,000₫</p>
                        </div>
                    </div>
                    <div className="product-small">
                       <div className="product-small_img">
                            <img src={MyImage4} alt="img" />
                            <div className="quickly-view">
                                <p>Xem ngay</p>
                            </div>
                        </div>
                        <div className="product-small_category">
                            <p>Rèm gia đình</p>
                        </div>
                        <div className="product-small_name">
                            <p>Rèm roman phòng bếp giá rẻ mã D04</p>
                        </div>
                        <div className="product-small_price">
                            <p>552,000₫</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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