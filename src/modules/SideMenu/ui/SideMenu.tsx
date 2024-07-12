import React, { useState } from "react"
import { addTitleToPopup } from "..//lib/addTitleToPopup";
import { menuItems } from "../mock/sideMenuItems";
import { addClassnameByItemNum } from "../lib/addClassnameByItemNum";
import { Menu } from "antd";
import { CollapseButton } from "@/modules/SideMenu/ui/CollapseButton/CollapseButton.tsx";
import type { MenuTheme } from 'antd';
import type { TMenuItem } from "..//mock/sideMenuItems";
import "./SideMenu.scss"
    
const circle = <span className="side-menu-circle"></span>


export const  SideMenu: React.FC = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [theme] = useState<MenuTheme>('dark');
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    }


    const items: TMenuItem[] = menuItems(
        <CollapseButton collapsed={collapsed}
        toggler={toggleCollapsed}/>,
      )

    return (        
      <div className="side-menu" style={{ width: 242}}>
        <Menu
            theme={theme}
            mode="inline"
            inlineCollapsed={collapsed} 
            forceSubMenuRender   
        >
          {
            items && items.map((item: TMenuItem, i: number) => 
                item.children
                ?
                <Menu.SubMenu
                  key={item.key} 
                  icon={circle} 
                  title={item.label} 
                  popupClassName={item.popupClassName}
                  onTitleMouseEnter={() => addTitleToPopup(item.label as string, item.popupClassName as string)}
                >
                    {item.children.map((submenuItem: TMenuItem) =>
                        <Menu.Item key={submenuItem.key}>
                            {submenuItem.label}
                        </Menu.Item>
                    )}
                </Menu.SubMenu>
                :
                <Menu.Item 
                    key={item.key}
                    className={addClassnameByItemNum(i, items.length)}
                    title={item.title} 
                    icon={item.icon}
                  >
                  {item.label}
                </Menu.Item>
            )
          }     
        </Menu>
      </div>
    );
}

