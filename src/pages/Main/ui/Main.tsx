import {Products} from "@/modules/Products"
import { Filters } from "@/modules/Filters"
import {SideMenu} from "@/modules/SideMenu/ui/SideMenu.tsx";
import './Main.scss'

export const Main = () =>  {
    return (
        <div className='main-container'>
            <SideMenu/>
            <Filters/>
            <Products/>
        </div>
    )
}


