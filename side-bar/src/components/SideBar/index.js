import React from 'react';

import { SiderBarData } from './SideBarData';

const SiderBar = ({ children }) => {
    return(
        <>
            <div className="sider-bar">
                <ul>
                    {
                        SiderBarData.map((val, key) =>{
                            return <li 
                                key={key} 
                                onClick={
                                    () => window.location.pathname = val.link
                                }
                                >
                                    <div>{val.icon}</div>
                                    <h1>{val.title}</h1>
                                </li>
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default SiderBar;