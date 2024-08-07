import React, { useState } from "react"
import { addTitleToPopup } from "..//lib/addTitleToPopup";
import { menuItems } from "../mock/sideMenuItems";
import { addClassnameByItemNum } from "../lib/addClassnameByItemNum";
import { Menu } from "antd";
import { CollapseButton } from "@/modules/SideMenu/ui/CollapseButton/CollapseButton.tsx"
import { useGlobalStore } from "@/store/useGlobalStore";
import type { TMenuItem } from "..//mock/sideMenuItems";
import "./SideMenu.scss"
    
const circle = <span className="side-menu-circle"></span>

export const  SideMenu: React.FC = () => {

    const {theme} = useGlobalStore()

    const [collapsed, setCollapsed] = useState(true)
    
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    }

    const itemsData: TMenuItem[] = menuItems()

    const collapseMenuItem = () => {
      return (
          <Menu.Item 
              className='collapse-logo-item'
              title='Свернуть меню'
              icon={<CollapseButton collapsed={collapsed} toggler={toggleCollapsed}/>}
            >
          </Menu.Item>
      )
    }

    const items = (itemsData: TMenuItem[]) => {
        return (
          itemsData && itemsData.map((item: TMenuItem) => 
              <Menu.Item 
                  key={item.key}
                  title={item.title} 
                  icon={circle}
                >
                {item.label}
              </Menu.Item>
          )
        )
    }


    return (        
      <div className="side-menu" style={{ width: 242}}>
        <Menu
            theme={theme}
            mode="inline"
            inlineCollapsed={collapsed} 
            forceSubMenuRender   
        >
          {
            [collapseMenuItem(), ...items(itemsData)]
          }     
        </Menu>
      </div>
    );
}

