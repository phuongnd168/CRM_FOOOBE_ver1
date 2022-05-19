import React from 'react'
import {Pagination} from 'antd';

const Nexpage = () => {
    return (
        <>
            <Pagination
                total={85}
                showTotal={total => `Total ${total} items`}
                defaultPageSize={20}
                defaultCurrent={1}
            />
        </>
    )
}

export default Nexpage