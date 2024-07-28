import {Checkbox, Slider, Space} from "antd";
import './Filters.scss'
import {useState} from "react"
import { useFiltersStore } from "../store/useFiltersStore";


const checkBoxFilters = [
    { label: 'Со скидкой', value: 'discount' },
    { label: 'В наличии', value: 'in_stock' },
]

const sorters = [
    { label: 'Цена', value: 'price' },
    { label: 'Рейтинг', value: 'rating' },
]

export const Filters = () => {


    const {setPriceLess, setFiltersOptions, setSortersOptions} = useFiltersStore()

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
                            <Slider defaultValue={500} className='filters-slider' onChange={setPriceLess} min={0} max={1000000}/>
                            <p>до {price} Р</p>
                        </Space>
                        <Checkbox.Group options={checkBoxFilters} onChange={setFiltersOptions}/>
                    </Space>
                </div>
                <div>
                    <h2>Сортировка</h2>
                    <Checkbox.Group options={sorters} onChange={setSortersOptions}/>
                </div> 
            </div>
        </div>
    )
}