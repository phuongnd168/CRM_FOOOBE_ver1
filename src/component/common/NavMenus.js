import React from 'react'
import '../scss/nav.scss'
import {
    HomeTwoTone,
    SearchOutlined,
    UserOutlined,
    SettingFilled,
    BellFilled,
    MenuFoldOutlined,
} from '@ant-design/icons';
import {useSelector, useDispatch} from 'react-redux';
import CurMenu from './CurMenu';
import Navmenutow from '../menu/Navmenutow';

const NavMenus = () => {
    const dispatch = useDispatch();
    const outxx = () => {
        sessionStorage.removeItem("Token")
        console.log('removetoken');
    }
    return (
        <div className='bodynav'>
            <div className='nav'>
                <div className='namenav'>
                    <HomeTwoTone/><span className='clotext'> /Trang Chủ</span>
                    <h2 className='clotext top-'>Quản lý cơ sở dữ liệu</h2>
                </div>

                <div className='itemav'>
                    <button style={{cursor: 'pointer'}} className='btnavz'>
                        <SearchOutlined/>
                    </button>
                    <input placeholder='Tìm Kiếm...' className='inputav'></input>
                    <span style={{cursor: 'pointer',color:'black'}}><UserOutlined/><a style={{color:'black'}} onClick={outxx}
                                                                        href='/login'> Đăng Xuất</a></span>
                    <span style={{cursor: 'pointer'}}><Navmenutow/></span>
                    <span style={{cursor: 'pointer'}}><SettingFilled/></span>
                    <span style={{cursor: 'pointer'}}><BellFilled/></span>

                </div>

            </div>
        </div>
    )
}

export default NavMenus