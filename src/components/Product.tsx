import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import myImage from "../assets/logo.png";
import MyImage from "../assets/img-product_remgiadinh/remgiadinh-phongngu2-300x300.jpg";
import MyImage2 from "../assets/img-product_remgiadinh/remgiadinh-phongkhach.jpg";
import MyImage3 from "../assets/img-product_remgiadinh/remgiadinh-phongkhach2.jpg";
import MyImage4 from "../assets/img-product_remgiadinh/remgiadinh-phongbep.jpg";
import MyImage5 from "../assets/img-product_remvanphong/remcuon-hanquoc.jpg";
import MyImage6 from "../assets/img-product_remvanphong/remcuon-hanquoc2.jpg";
import MyImage7 from "../assets/img-product_remvanphong/remvanphong-saonhom2.jpg";
import MyImage8 from "../assets/img-product_remvanphong/remvanphong-saonhom3.jpg";
import MyImage9 from "../assets/img-product_remcuon/remcuon-hanquoc (1).jpg";
import MyImage10 from "../assets/img-product_remcuon/remcuon-hanquoc3.jpg";
import MyImage11 from "../assets/img-product_remcuon/remcuon-tron2.jpg";
import MyImage12 from "../assets/img-product_remcuon/remcuon-tron3.jpg";


interface dataCatagoriProduct{
    name: string;
    data: dataRem[]
}

interface dataRem{
    name: string;
    loai: string;
    gia: string;
    image: string
}

export default function ProductPage1(){

    const datasCurtainFamily: dataRem[]=[
        {
            name: "Rèm cửa vải chất thô chống nắng tốt mã DIM15-03",
            loai: "Rèm gia đình",
            gia: "500.000đ",
            image: MyImage
        },
        {
            name: "Rèm cửa vải phòng khách chống nắng tốt",
            loai: "Rèm gia đình",
            gia: "550.000đ",
            image: MyImage2
        },
        {
            name: "Rèm cửa vải phòng khách đẹp, cản nắng tốt",
            loai: "Rèm gia đình",
            gia: "500.000đ",
            image: MyImage3
        },
        {
            name: "Rèm roman phòng bếp giá rẻ mã D04",
            loai: "Rèm gia đình",
            gia: "511.000đ",
            image: MyImage4
        }, 
    ]
    const dataCurtainOffice: dataRem[]=[
        {
            name: "Mành lá nhôm hãng Vạn Thái mã ST29",
            loai: "Rèm văn phòng",
            gia: "300,000₫",
            image: MyImage7
        },
        {
            name: "Mành sáo nhôm hãng Vạn Thái mã ST31",
            loai: "Rèm văn phòng",
            gia: "300,000₫",
            image: MyImage8
        },
        {
            name: "Rèm cầu vồng giá rẻ hãng FIVESTAR – Mã Basic",
            loai: "Rèm văn phòng",
            gia: "369,000₫",
            image: MyImage5
        },
        {
            name: "Rèm cầu vồng hãng FIVESTAR – Mã Eco Screen",
            loai: "Rèm văn phòng",
            gia: "349,000₫",
            image: MyImage6
        }, 
    ]
    const dataCurtainFolded: dataRem[]=[
        {
            name: "Rèm cầu vồng giá rẻ hãng FIVESTAR – Mã Basic",
            loai: "Rèm cuốn",
            gia: "369,000₫",
            image: MyImage9
        },
        {
            name: "Rèm cầu vồng hãng FIVESTAR – Mã Woodlook I",
            loai: "Rèm cuốn",
            gia: "511.000đ",
            image: MyImage10
        },
        {
            name: "Rèm cuốn cản sáng 100% hãng FIVESTAR mã FC09",
            loai: "Rèm cuốn",
            gia: "245.000đ",
            image: MyImage11
        },
        {
            name: "Rèm cuốn cản sáng 100% hãng FIVESTAR mã FC10",
            loai: "Rèm gia đình",
            gia: "245.000đ",
            image: MyImage12
        }, 
    ]

    const dataCatagori: dataCatagoriProduct[] = [
        {
            name :"Rèm văn phòng",
            data : dataCurtainOffice
        },
        {
            name :"Rèm gia đình",
            data : datasCurtainFamily
        },
        {
            name :"Rèm cuốn",
            data : dataCurtainFolded
        },
    ]
    
    const [dataCurrent, SetData] = useState(dataCurtainOffice);

    
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
                 {dataCatagori.map((item1)=>
                 <ul className="product-categories">
                     <li>
                         <p className="product-categories_children" onClick={()=>{
                            SetData(item1.data)
                         }}>{item1.name}</p>
                     </li>
                 </ul>)}
             </div>
             <div className="catalog-product">
                 {dataCurrent.map((item) => 
                     <div className="product-small">
                     <div className="product-small_img">
                         <img src={item.image} alt="img" />
                         <div className="quickly-view">
                             <p>Xem ngay</p>
                         </div>
                     </div>
                     <div className="product-small_category">
                         <p>{item.loai}
                         </p>
                     </div>
                     <div className="product-small_name">
                         <p>{item.name}</p>
                     </div>
                     <div className="product-small_price">
                         <p>{item.gia}</p>
                     </div>
                 </div>)}
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