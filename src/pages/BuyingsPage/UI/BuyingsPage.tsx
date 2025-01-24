import { useState, useEffect } from 'react';
import { Table, Tag, Space, Pagination } from 'antd'
import { useQuery } from '@apollo/client'
import { GET_ALL_TRANSACTIONS } from '../queries';
import type { TableProps } from 'antd';
import type { GetAllTransactionsDto, TransactionsDataDto } from '../dto';
import type { QueryResult } from '@apollo/client';
import './BuyingsPage.scss'
  
const columns: TableProps<TransactionsDataDto>['columns'] = [
    {
        title: 'Цена заказа',
        dataIndex: 'full_price',
        key: 'full_price',
    },
    {
        title: 'Время заказа',
        dataIndex: 'created_at',
        key: 'created_at',
    },
    {
        title: 'Пользователь',
        dataIndex: 'username',
        key: 'username',
    }
]

export const BuyingsPage = () =>  {

    const [ tableData, setTableData] = useState<TransactionsDataDto[] | []>([])

    const jwt_token = localStorage.getItem('token')
    
    const { data }: QueryResult<{ getTransactionsItemsData: TransactionsDataDto[] | undefined}> = 
        useQuery(GET_ALL_TRANSACTIONS, { variables: { jwt_token }, skip: !jwt_token, fetchPolicy: 'network-only' })


    useEffect(() => {
        const { getTransactionsItemsData } = data || {}
        getTransactionsItemsData && setTableData(getTransactionsItemsData)
    }, [data])

    return (
        <div className='buyings-page-container'>
           <Table 
                dataSource={tableData}  
                columns={columns}
                pagination={{pageSize: 10, total: tableData?.length || 0}}
            >
           </Table>
        </div>
    )
}


