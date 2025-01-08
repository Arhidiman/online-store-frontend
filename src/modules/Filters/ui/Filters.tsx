import {Checkbox, Slider, Space} from "antd";
import { useFiltersStore } from "../store/useFiltersStore";
import { Select } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import './FIlters.scss'

export const Filters = () => {

    const { filters, setFilters } = useFiltersStore()
    const { price, maxPrice, in_stock, discount } = filters

    const checkBoxFilters = [
        { label: 'Со скидкой', value: 'discount', checked: discount === true },
        { label: 'В наличии', value: 'in_stock', checked: in_stock === true },
    ]
    
    const sorters = [
        { label: 'Сначала дешёвые', value: 'priceSort' },
        { label: 'С высоким рейтингом', value: 'ratingSort' },
    ]


    const setCheckBoxFilters = (e: CheckboxChangeEvent) => {

        const target = e.target

        if (target.value.includes('in_stock')) {
            setFilters({
                in_stock: in_stock ? false : true
            })
        }

        if (target.value.includes('discount')) {
            setFilters({
                discount: discount ? false : true
            })
        }
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
                            <Slider value={price} defaultValue={maxPrice} className='filters-slider' onChange={(price: number) => setFilters({ price }) } min={0} max={maxPrice}/>
                            <p>до {price || maxPrice} ₽</p>
                        </Space>

                        <Space>
                            { checkBoxFilters && checkBoxFilters.map(filter => 
                                    <Checkbox checked={filter.checked} value={filter.value} onChange={setCheckBoxFilters}>{ filter.label}</Checkbox>
                                )
                            }
                        </Space>
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