import { useEffect, useState } from "react";
import { useQuery} from "@apollo/client"
import {Products} from "@/modules/Products"
import { Filters } from "@/modules/Filters";
import { SideMenu } from "@/modules/SideMenu/ui/SideMenu.tsx";
import { CustomCarousel } from "@/components/CustomCarousel";
import { queries } from "../constants/queries";
import { useGlobalStore } from "@/store/useGlobalStore";
import type { CategoriesDto } from "../dto/dto";
import './Main.scss'


export const Main = () =>  {

    const [categories, setCategories] = useState<CategoriesDto[] | []>([])
    const { data } = useQuery(queries.GET_CATEGORIES)

    const { isCategoriesMenuOpen, isMobileVersion } = useGlobalStore()

    useEffect(() => {
        const { categories } = data || []
        setCategories(categories as CategoriesDto[])
    }, [data])


    const DeskTopVersionContent = () => {
        return (
            !isMobileVersion && 
                <>     
                    <SideMenu itemsData={categories} open={isCategoriesMenuOpen}/>
                    <div className="main-top">



                        <Filters/>
                        <CustomCarousel/>
                    </div>
                </>
        )
    }
    
    return (
        <>
            <div className='main-container'>
                <DeskTopVersionContent/>
                <Products/>
            </div>
        </>
      
    )
}


