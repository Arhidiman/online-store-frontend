import { useState, useEffect } from "react";
import { SideMenu } from "@/modules/SideMenu/ui/SideMenu";
import { useQuery } from "@apollo/client";
import { queries } from "./queries";
import type { CategoriesDto } from "../Main/dto/dto";
import './FiltersPage.scss'

export const FiltersPage = () => {

    const [categories, setCategories] = useState<CategoriesDto[] | []>([])
    const { data } = useQuery(queries.GET_CATEGORIES)

    useEffect(() => {
        const { categories } = data || []
        setCategories(categories as CategoriesDto[])
    }, [data])

    return (
        <SideMenu open={true} itemsData={categories} className='categories-cover'/>
    )
}