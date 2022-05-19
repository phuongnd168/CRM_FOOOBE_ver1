import React from "react";
import "../scss/table.scss";
import {Avatar, Divider, Tooltip} from "antd";
import {UserOutlined, AntDesignOutlined} from "@ant-design/icons";

const Tabble = () => {
    return (
        <div className="bodytableh">
            <section className="wrapper">
                <main className="row title">
                    <ul>
                        <li>Chức Năng</li>
                        <li>Thời Gian Dự Kiến</li>
                        <li>
                            <span className="title-hide">$</span> Kinh Phí
                        </li>
                        <li>Thành Viên</li>
                        <li>Tiến Độ</li>
                    </ul>
                </main>

                <section className="row-fadeIn-wrapper">
                    <article className="row fadeIn nfl">
                        <ul>
                            <li>
                                <a href="#">Page</a>
                                <span className="small">(fadeIn)</span>
                            </li>
                            <li>70d</li>
                            <li>4000$</li>
                            <li>
                                <Avatar.Group
                                    maxCount={2}
                                    maxStyle={{color: "#f56a00", backgroundColor: "#fde3cf"}}
                                >
                                    <Avatar src="https://joeschmoe.io/api/v1/random"/>
                                    <Avatar style={{backgroundColor: "#f56a00"}}>K</Avatar>
                                    <Tooltip title="Ant User" placement="top">
                                        <Avatar
                                            style={{backgroundColor: "#87d068"}}
                                            icon={<UserOutlined/>}
                                        />
                                    </Tooltip>
                                    <Avatar
                                        style={{backgroundColor: "#1890ff"}}
                                        icon={<AntDesignOutlined/>}
                                    />
                                </Avatar.Group>
                            </li>
                            <li>40%</li>
                        </ul>
                        {/* <ul className="more-content">
          <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
        </ul> */}
                    </article>
                </section>
                <section className="row-fadeIn-wrapper">
                    <article className="row fadeIn pga">
                        <ul>
                            <li>
                                <a href="#">NFL</a>
                                <span className="small">(fadeIn)</span>
                            </li>
                            <li>$50</li>
                            <li>12</li>
                            <li>48</li>
                            <li>ssss</li>
                        </ul>
                        {/* <ul className="more-content">
          <li>This 1665-player contest boasts a $300,000.00 prize pool and pays out the top 300 finishing positions. First place wins $100,000.00. Good luck!</li>
        </ul> */}
                    </article>
                </section>
            </section>
        </div>
    );
};

export default Tabble;
