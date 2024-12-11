import {Checkbox, Slider, Space} from "antd";
import { useFiltersStore } from "../store/useFiltersStore";
import './FIlters.scss'

const checkBoxFilters = [
    { label: 'Со скидкой', value: 'discount' },
    { label: 'В наличии', value: 'in_stock' },
]

const sorters = [
    { label: 'Цена', value: 'price' },
    { label: 'Рейтинг', value: 'rating' },
]

export const Filters = () => {

    // const {setPriceMax, setFiltersOptions, setSortersOptions, filtersData} = useFiltersStore()
    const { filters, setFilters } = useFiltersStore()

    const {price} = filters

    return (
        <div className="filters">
            <div className='filters-container'>
                <div>
                    <h2>Фильтры</h2>
                    <Space direction="vertical">
                        <Space>
                            <Slider defaultValue={50000} className='filters-slider' onChange={(price: number) => setFilters({ price }) } min={0} max={50000}/>
                            <p>до {price || ''} ₽</p>
                        </Space>
                        <Checkbox.Group options={checkBoxFilters} onChange={(checkboxes) => console.log(checkboxes, 'checkboxes')}/>
                    </Space>
                </div>
                <div>
                    <h2>Сортировка</h2>
                    {/* <Checkbox.Group options={sorters} onChange={setSortersOptions}/> */}
                </div> 
            </div>
        </div>
    )
}