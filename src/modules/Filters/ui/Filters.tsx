import {Checkbox, Slider, Space} from "antd";
import './Filters.scss'
import {useState} from "react";


const checkBoxFilters = [
    { label: 'Со скидкой', value: 'discount' },
    { label: 'В наличии', value: '' },
]

const sorters = [
    { label: 'Цена', value: 'price' },
    { label: 'Рейтинг', value: 'rating' },
]


export const Filters = () => {

    const [price, setPrice] = useState<number>(5000)

    const updatePrice = (e: number) => {

        setPrice(e)
    }

    return (
        <div className="filters">
            <div className='filters-container'>
                <div>
                    <h2>Фильтры</h2>
                    <Space direction="vertical">
                        <Space>
                            <Slider defaultValue={500} className='filters-slider' onChange={updatePrice} min={0} max={1000000}/>
                            <p>до {price} Р</p>
                        </Space>
                        <Checkbox.Group options={checkBoxFilters}/>
                    </Space>
                </div>
                <div>
                    <h2>Сортировка</h2>
                    <Checkbox.Group options={sorters}/>
                </div> 
            </div>
        </div>
    )
}