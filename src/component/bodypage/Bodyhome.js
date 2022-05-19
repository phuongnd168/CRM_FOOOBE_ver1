import React from 'react'
import Chabdin2 from '../common/Chabdin2'
import ChartBD from '../common/ChartBD'
import '../scss/bodyhome.scss'
import Tabble from './Tabble';
import Footerr from '../common/Footerr';

const Bodyhome = () => {
    return (
        <div className='bodyhome'>

            <div className='boxchar'>
                <div className='fomcon'>Bộ Nhớ Đã Sử Dụng</div>
                <div className='fomcha'>
                    <ChartBD/>
                </div>
            </div>

            <div className='boxchar'>
                <div className='fomcon'> Thành Phần Dữ Liệu</div>
                <div className='fomcha'>
                    <Chabdin2/>
                </div>
            </div>

            <div>
                <Tabble className='fomtb'/>
            </div>

        </div>
    )
}

export default Bodyhome