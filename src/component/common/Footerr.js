import React from 'react'
import '../scss/foooter.scss'

const Footerr = () => {
    return (
        <div>
            {/* <header>
</header>

<main>
</main> */}

            <footer className="footer">
                <div className="footer__addr">
                    <h1 className="footer__logo">Có gì ở đây</h1>

                    <h2>Những con người đầy tài năng</h2>

                    <address>
                        Họ tới từ Fpoly<br/>

                        {/* <a className="footer__btn" href="">Email Us</a> */}
                    </address>
                </div>

                <ul className="footer__nav">
                    <li className="nav__item">
                        <h2 className="nav__title">Phương tiện</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Trực tuyến</a>
                            </li>

                            <li>
                                <a href="#">Trực Tiếp</a>
                            </li>

                            <li>
                                <a href="#">Liên hệ quảng cáo</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item nav__item--extra">
                        <h2 className="nav__title">Công nghệ</h2>

                        <ul className="nav__ul nav__ul--extra">
                            <li>
                                <a href="#">Phần cứng</a>
                            </li>

                            <li>
                                <a href="#">Đồ họa</a>
                            </li>

                            <li>
                                <a href="#">Phần mềm</a>
                            </li>

                            <li>
                                <a href="#">Tự động hóa</a>
                            </li>

                            <li>
                                <a href="#">Trí tuệ nhân tạo</a>
                            </li>

                            <li>
                                <a href="#">IoT</a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav__item">
                        <h2 className="nav__title">Thông tin thêm</h2>

                        <ul className="nav__ul">
                            <li>
                                <a href="#">Chính sách bảo mật</a>
                            </li>

                            <li>
                                <a href="#">Điều khoản</a>
                            </li>

                            <li>
                                <a href="#">Bản đồ</a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="legal">
                    <p>&copy; 2021 Đã được đăng ký bản quyền </p>

                    <div className="legal__links">
                        <span> Xuất bản bởi nhà phát triển Tran_Manh <span className="heart">♥</span></span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footerr