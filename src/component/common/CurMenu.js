import {current} from "@reduxjs/toolkit";
import React, {useState} from "react";
import "../scss/curmenu.scss";
import {HomeTwoTone, MenuFoldOutlined} from "@ant-design/icons";

const CurMenu = () => {
    function openNav() {
        console.log("ssss");
        document.getElementById("myNav").style.width = "50%";
    }

    function closeNav() {
        document.getElementById("myNav").style.width = "0%";
    }

    return (
        <>
            <div id="myNav" className="overlay">
                <a className="closebtn" onClick={closeNav}>
                    &times;
                </a>
                <div className="overlay-content">

                    <nav class="main-nav" role="navigation">
                        <ul>
                            <li>
                                <a href="/">
                                    <span>Database</span>
                                </a>
                            </li>
                            <hr/>
                            <li>
                                <a href="/table">
                                    <span>Tabble</span>
                                </a>
                            </li>
                            <hr/>
                            <li>
                                <a href="">
                                    <span>Order Tracker</span>
                                </a>
                            </li>
                            <hr/>
                            <li>
                                <a href="">
                                    <span>Change Password</span>
                                </a>
                            </li>
                            <hr/>
                            <li>
                                <a href="">
                                    <span>Log Out</span>
                                </a>
                            </li>
                            <hr/>
                        </ul>
                    </nav>

                </div>
            </div>
            <span onClick={openNav} style={{cursor: "pointer"}}>
        <MenuFoldOutlined/>
      </span>
        </>
    );
};

export default CurMenu;
