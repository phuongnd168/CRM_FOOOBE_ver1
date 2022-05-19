import {Button, notification, Pagination} from 'antd';

export const openNotification = (msg) => {
    notification.open({
        message: msg,
    });
};

export const paginationResponsive = (
    index,
    pageItem,
    total,
    onChange,
    onShowSizeChange
) => {
    //pageItem : Số Item mặc định trên một trạng
    //index : Trang bắt đầu
    //total : Tổng số phần tử
    return (
        <div className={(Number(index) > 2 ? "panagiton-sive" : "pagination-responsive ")}>
            {total && Number(total) > 0 ? (
                <Pagination
                    className={Number(pageItem) > 3 ? "pageSive" : ""}

                    showSizeChanger
                    onChange={onChange}
                    onShowSizeChange={onShowSizeChange}
                    defaultPageSize={pageItem ? pageItem : 10}
                    current={index ? index : 0 + 1}
                    total={total ? total : 10}
                    style={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    showLessItems
                />
            ) : (
                ""
            )}
        </div>
    );
};