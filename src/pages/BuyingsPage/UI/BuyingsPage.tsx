import { useState, useEffect } from 'react';
import { Table } from 'antd'
import { useQuery } from '@apollo/client'
import { GET_ALL_TRANSACTIONS } from '../queries';
import type { TableProps } from 'antd';
import { useGlobalStore } from '@/store/useGlobalStore';
import type { TransactionsDataDto } from '../dto';
import type { QueryResult } from '@apollo/client';
import { getDateAndTimeFromTimestamp } from '@/utils';
import './BuyingsPage.scss'


const numberSorter = (key:  'full_price') => {
    return (a: TransactionsDataDto, b: TransactionsDataDto) => a[key] - b[key]
}

const alphabetSorter = (key: keyof Omit<TransactionsDataDto, 'full_price'>) => {
    return (a: TransactionsDataDto, b: TransactionsDataDto) => a[key].localeCompare(b[key])
}

const columns: TableProps<TransactionsDataDto>['columns'] = [
    {
        title: 'Цена заказа',
        dataIndex: 'full_price',
        key: 'full_price',
        sorter: numberSorter('full_price')
    },
    {
        title: 'Время заказа',
        dataIndex: 'created_at',
        key: 'created_at',
        sorter: alphabetSorter('created_at')

    },
    {
        title: 'Город',
        dataIndex: 'city',
        key: 'city',
        sorter: alphabetSorter('city')
    },
    {
        title: 'Улица',
        dataIndex: 'street',
        key: 'street',
        sorter: alphabetSorter('street')

    },
    {
        title: 'Дом',
        dataIndex: 'building',
        key: 'building',
        sorter: alphabetSorter('building')

    }
]


const mobileColumns = [
    {
        title: 'Цена заказа',
        dataIndex: 'full_price',
        key: 'full_price',
        sorter: numberSorter('full_price')
    },
    {
        title: 'Время заказа',
        dataIndex: 'created_at',
        key: 'created_at',
        sorter: alphabetSorter('created_at')

    },
    {
        title: 'Город',
        dataIndex: 'city',
        key: 'city',
        sorter: alphabetSorter('city')
    }
]

export const BuyingsPage = () =>  {

    const { isMobileVersion } = useGlobalStore()

    const [ tableData, setTableData] = useState<TransactionsDataDto[] | []>([])
    const [ mobileTableData, setMobileTableData] = useState<TransactionsDataDto[] | []>([])

    const jwt_token = localStorage.getItem('token')
    
    const { data }: QueryResult<{ getTransactionsItemsData: TransactionsDataDto[] | undefined}> = 
        useQuery(GET_ALL_TRANSACTIONS, { variables: { jwt_token }, skip: !jwt_token, fetchPolicy: 'network-only' })


    useEffect(() => {
        const { getTransactionsItemsData } = data || {}
        getTransactionsItemsData && setTableData(getTransactionsItemsData.map(dataItem => ({...dataItem, created_at: getDateAndTimeFromTimestamp(dataItem.created_at)})))
    }, [data])

    useEffect(() => {
        const { getTransactionsItemsData } = data || {}
        isMobileVersion && getTransactionsItemsData && setMobileTableData(
            getTransactionsItemsData.map(dataItem => ({
                ...dataItem, created_at: getDateAndTimeFromTimestamp(dataItem.created_at)
            })).map(item => {
                return Object.keys(item).reduce((acc, key) => {

                    if (key !== 'street' && key !== 'building') {
                        return {
                            ...acc,
                            [key]: item[key as keyof TransactionsDataDto]
                        }
                    } else return acc
                   
                }, {} as TransactionsDataDto)
            })
        )
    }, [data, isMobileVersion])

    return (
        <div className='buyings-page-container'>
           <Table 
                className='buyings-page-table'
                dataSource={ isMobileVersion ? mobileTableData : tableData}  
                columns={isMobileVersion ? mobileColumns : columns}
                pagination={{pageSize: 10, total: tableData?.length || 0}}
            >
           </Table>
        </div>
    )
}


