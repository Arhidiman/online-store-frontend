import React, { useState } from "react"
import { addTitleToPopup } from "..//lib/addTitleToPopup";
import { menuItems } from "../mock/sideMenuItems";
import { addClassnameByItemNum } from "../lib/addClassnameByItemNum";
import { Menu } from "antd";
import { CollapseButton } from "@/modules/SideMenu/ui/CollapseButton/CollapseButton.tsx"
import { useGlobalStore } from "@/store/useGlobalStore";
// import type { TMenuItem } from "..//mock/sideMenuItems";
import "./SideMenu.scss"


type TMenuItem = {
  category_id: number,  
  name: string
}

interface ISideMenu {
  itemsData: TMenuItem[]
}
    
const circle = <span className="side-menu-circle"></span>

export const  SideMenu = ({itemsData}: ISideMenu) => {

    const {theme} = useGlobalStore()

    const [collapsed, setCollapsed] = useState(true)
    
    const toggleCollapsed = () => {
      setCollapsed(!collapsed);
    }

    // const itemsData: TMenuItem[] = menuItems()

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

    const firstMenuItem = () => {
      return (
          <Menu.Item 
              title='Все категории'
              icon={circle}
            >
            Все категории
          </Menu.Item>
      )
    }

    const items = (itemsData: TMenuItem[]) => {
        return (
          itemsData && itemsData.map((item: TMenuItem) => 
              <Menu.Item 
                  key={item.category_id}
                  title={item.name} 
                  icon={circle}
                  // onChange={() => console.log()}
                >
                {item.name}
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
            onChange={(e) => console.log(e)}
            onClick={(e)=>console.log(e)}

        >
          {
            [collapseMenuItem(), [firstMenuItem(), ...items(itemsData)]]
          }     
        </Menu>
      </div>
    );
}

