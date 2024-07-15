import {Checkbox, Collapse, Slider} from "antd";
import type { CollapseProps } from 'antd';
import './Filters.scss'
import {SyntheticEvent, useState} from "react";


const prices = [
    { label: 'До 10000', value: '10000' },
    { label: 'До 50000', value: '50000' },
    { label: 'До 100000', value: '100000' },
]

const categories = [
    { label: 'Бытовая техника', value: 'Бытовая техника' },
    { label: 'Одежда', value: 'Одежда' },
    { label: 'Инструменты', value: 'Инструменты' },
];


const pricesItems: CollapseProps['items'] = [
    {
        key: '1',
        label: 'Цены',
        children:  <Checkbox.Group options={prices}/>,
    }
]

const categoriesItems: CollapseProps['items'] = [
    {
        key: '2',
        label: 'Категории',
        children:  <Checkbox.Group options={categories}/>,
    }
]



export const Filters = () => {


    const [price, setPrice] = useState<number>(5000)

    const updatePrice = (e: number) => {

        setPrice(e)
    }

    console.log(price)

    return (
        <div className="filters">
            <h2>Фильтры</h2>
            <div className='filters-container'>
                <Slider defaultValue={500} className='filters-slider' onChange={updatePrice} min={0} max={1000000}/>
                <p>до {price} Р</p>
            </div>
        </div>
    )
}