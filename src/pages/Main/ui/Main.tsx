import { useEffect } from "react";
import {Products} from "@/modules/Products"
import { Filters } from "@/modules/Filters";
import {SideMenu} from "@/modules/SideMenu/ui/SideMenu.tsx";
import { CustomCarousel } from "@/components/CustomCarousel";
import { useMainPageStore } from "../store/useMainPageStore";
import './Main.scss'

export const Main = () =>  {


    const {categories, getCategories} = useMainPageStore()


    useEffect(() => {
        getCategories()
    }, [])

    console.log(categories, 'categories')

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


