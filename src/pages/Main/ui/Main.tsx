import { useEffect, useState } from "react";
import {gql, useQuery} from "@apollo/client"
import {Products} from "@/modules/Products"
import { Filters } from "@/modules/Filters";
import {SideMenu} from "@/modules/SideMenu/ui/SideMenu.tsx";
import { CustomCarousel } from "@/components/CustomCarousel";
import { queries } from "../constants/queries";
import type { CategoriesDto } from "../dto/dto";
import './Main.scss'


export const Main = () =>  {




    const [categories, setCategories] = useState<CategoriesDto[] | []>([])
    const { data } = useQuery(queries.GET_CATEGORIES)

    console.log(data, 'categories data')

 
    useEffect(() => {
        const { categories } = data || []
        setCategories(categories as CategoriesDto[])
    }, [data])


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


