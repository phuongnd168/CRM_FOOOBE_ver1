import React, {useState} from "react";
import "./navs.scss";
import {
    HomeTwoTone,
    SearchOutlined,
    UserOutlined,
    SettingFilled,
    BellFilled,
    MenuFoldOutlined,
} from '@ant-design/icons';

const Navmenutow = () => {
    const [burger, setburger] = useState('open-main-nav');
    const [main, setmain] = useState('main-nav')

    const burgerz = () => {
        if (burger == 'open-main-nav') {
            setburger('open-main-nav is-open');
            setmain('main-nav is-open');
        } else {
            setburger('open-main-nav');
            setmain('main-nav');
        }

    }
    return (
        <div className="navz">
            <div className="device">
                <div className="container">
                    <button id="burger" className={burger} onClick={burgerz}> 
                        <MenuFoldOutlined/>
                    </button>
                    <nav className={main} id="main-nav">
                        <br />
                        <br />
                        <button id="burger" className={burger} onClick={burgerz}>
                            <span className="burger-text"><span className="burger"></span></span>
                        </button>
                        <ul>
                            <li>
                                <a href="/">Trang chủ</a>
                            </li>
                            {/* <li>
                <a href="#">Speaker &amp; Writer</a>
              </li> */}
                            <li>
                                <a href="/ManagermentAcount">Quản lý người dùng</a>
                            </li>
                            <li>
                                <a href="/ManagermentPost/">Quản lý bài viết</a>
                            </li>
                          
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navmenutow;
