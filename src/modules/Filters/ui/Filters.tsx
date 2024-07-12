import {Checkbox, Collapse} from "antd";
import type { CollapseProps } from 'antd';
import './Filters.scss'


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

    return (
        <div className="filters">
            <h2>Фильтры</h2>
            <div className='filters-container'>
                <Collapse items={pricesItems}/>
                <Collapse items={categoriesItems}/>
            </div>
        </div>
    )
}