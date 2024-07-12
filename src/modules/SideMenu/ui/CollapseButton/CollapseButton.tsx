import React, { MouseEventHandler } from "react"
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";


interface iCollapseButton {
    collapsed: boolean, 
    toggler: MouseEventHandler<HTMLButtonElement>
}

export const CollapseButton: React.FC<iCollapseButton> =  ({collapsed, toggler}) => {
    return (
        <button className="side-menu-button" onClick={toggler} >
            {
                collapsed 
                ? 
                <RightCircleOutlined style={{fontSize: "24px", color:"#939393"}} className="collapse-button-icon" /> 
                : 
                <LeftCircleOutlined style={{ fontSize: "24px", color: "#939393" }} className="collapse-button-icon" />
            }
        </button>
    )
}
