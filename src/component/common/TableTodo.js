import React from "react";
import "../scss/tabletodo.scss";
import Nexpage from "./Nexpage";
import Selects from "./Selects";

const TableTodo = () => {
    return (
        <div className="bodytbtodo">
            <section>
                <h1>
                    Fixed Table header{" "}
                    <span>
            <Selects/>
          </span>{" "}
                </h1>
                <div className="tbl-header">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                        <tr>
                            <th>Code</th>
                            <th>Company</th>
                            <th>Price</th>
                            <th>Change</th>
                            <th>Change %</th>
                        </tr>
                        </thead>
                    </table>
                </div>
                <div className="tbl-content">
                    <table cellpadding="0" cellspacing="0" border="0">
                        <tbody>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY</td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY</td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        <tr>
                            <td>XXD</td>
                            <td>ADITYA BIRLA</td>
                            <td>$1.02</td>
                            <td>-1.01</td>
                            <td>+2.36%</td>
                        </tr>
                        <tr>
                            <td>AAC</td>
                            <td>AUSTRALIAN COMPANY</td>
                            <td>$1.38</td>
                            <td>+2.01</td>
                            <td>-0.36%</td>
                        </tr>
                        <tr>
                            <td>AAD</td>
                            <td>AUSENCO</td>
                            <td>$2.38</td>
                            <td>-0.01</td>
                            <td>-1.36%</td>
                        </tr>
                        <tr>
                            <td>AAX</td>
                            <td>ADELAIDE</td>
                            <td>$3.22</td>
                            <td>+0.01</td>
                            <td>+1.36%</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
            <div className="nexpg">
                <Nexpage/>
            </div>
        </div>
    );
};

export default TableTodo;
