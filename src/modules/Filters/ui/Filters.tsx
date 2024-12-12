import {Checkbox, Slider, Space} from "antd";
import { useFiltersStore } from "../store/useFiltersStore";
import { Select } from "antd";
import './FIlters.scss'

const checkBoxFilters = [
    { label: 'Со скидкой', value: 'discount' },
    { label: 'В наличии', value: 'in_stock' },
]

const sorters = [
    { label: 'Сначала дешёвые', value: 'priceSort' },
    { label: 'С высоким рейтингом', value: 'ratingSort' },
]


export const Filters = () => {

    const { filters, setFilters } = useFiltersStore()
    const {price} = filters

    const setCheckBoxFilters = (e: string[]) => {
        setFilters({
            in_stock: e.includes('in_stock') ? true : false,
            discount: e.includes('discount') ? true : false
        })
    }

    const setCheckBoxSorters = (e: string) => {

        const sorters: {priceSort?: string, ratingSort?: string} = {}
        
        if(e.includes('priceSort')) {
            sorters.priceSort = 'ASC'
            sorters.ratingSort = undefined
        }
        if(e.includes('ratingSort')) {
            sorters.ratingSort = 'DESC'
            sorters.priceSort = undefined
        }

        setFilters(sorters)
    }

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
                        <Checkbox.Group options={checkBoxFilters} onChange={setCheckBoxFilters}/>
                    </Space>
                </div>
                <div>
                    <h2>Сортировка</h2>
                    <Select defaultValue="Выберите сортировку" style={{ width: 250 }} onChange={setCheckBoxSorters} options={ sorters }/>
                </div> 
            </div>
        </div>
    )
}