import { Space } from "antd";
import {Products} from "@/modules/Products"
import { Filters } from "@/modules/Filters";
import {SideMenu} from "@/modules/SideMenu/ui/SideMenu.tsx";
import { CustomCarousel } from "@/components/CustomCarousel";
import './Main.scss'

export const Main = () =>  {
    return (
        <div className='main-container'>
            <SideMenu/>
            <div className="main-top">
                <Filters/>
                <CustomCarousel/>
            </div>
            <Products/>
        </div>
    )
}


