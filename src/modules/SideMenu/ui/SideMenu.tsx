import React, { useState } from "react"
import { Menu } from "antd";
import { CollapseButton } from "@/modules/SideMenu/ui/CollapseButton/CollapseButton.tsx"
import { useGlobalStore } from "@/store/useGlobalStore"
import { useFiltersStore } from "../../Filters";
import type { FormEvent, FormEventHandler } from "react";
import type { MenuInfo } from "rc-menu/lib/interface"; // Тип для объекта события
import "./SideMenu.scss"


type TMenuItem = {
  id: number,  
  name: string
}

interface ISideMenu {
  itemsData: TMenuItem[] | [],
  open: boolean,
  className?: string
}

    
const circle = <span className="side-menu-circle"></span>

export const  SideMenu = ({ itemsData, open, className }: ISideMenu) => {

    const { appTheme } = useGlobalStore()
    const { filters, setFilters } = useFiltersStore()
    const [ collapsed, setCollapsed ] = useState(true)
    
    const toggleCollapsed = () => {
      setCollapsed(!collapsed)
    }

    const setCategoryFilter = (e: MenuInfo) => {
      setFilters({ ...filters, category: Number(e.key)})
    }

    const resetCategoriesFilter = () => {
      setFilters({ ...filters, category: null})
    }

    const collapseMenuItem = () => {
      return (
          <Menu.Item 
              key={'collapse'}
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
              key={'all'}
              title='Все категории'
              icon={circle}
              onClick={resetCategoriesFilter}
            >
            Все категории
          </Menu.Item>
      )
    }

    const items = (itemsData: TMenuItem[] | []) => {
        return (
          itemsData && itemsData.map(({id, name}: TMenuItem) => 
              <Menu.Item 
                  key={id}
                  title={name} 
                  icon={circle}
                  onClick={setCategoryFilter}
                >
                {name}
              </Menu.Item>
          )
        )
    }


    console.log(open, 'is open')


    return (        
      <div className={`side-menu ${className ? className : ''}`}>
        <Menu
            theme={appTheme}
            mode="inline"
            inlineCollapsed={!open} 
            forceSubMenuRender   
            onClick={(e)=>console.log(e)}
        >
          {
            [[firstMenuItem(), ...items(itemsData) || []]]
          }     
        </Menu>
      </div>
    );
}

