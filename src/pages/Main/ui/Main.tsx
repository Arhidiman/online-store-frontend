import { useEffect, useState } from "react";
import {gql, useQuery} from "@apollo/client"
import {Products} from "@/modules/Products"
import { Filters } from "@/modules/Filters";
import {SideMenu} from "@/modules/SideMenu/ui/SideMenu.tsx";
import { CustomCarousel } from "@/components/CustomCarousel";
import { useMainPageStore } from "../store/useMainPageStore";
import './Main.scss'

import { apolloClient } from "@/main";

export const Main = () =>  {

    const {categories, getCategories, getUserById} = useMainPageStore()
 
    useEffect(() => {
        getCategories()
    }, [])


    return (
        <div className='main-container'>
            <SideMenu itemsData={categories}/>
            <div className="main-top">
                <Filters/>
                <CustomCarousel/>
            </div>
            <Products/>
        </div>
    )
}


