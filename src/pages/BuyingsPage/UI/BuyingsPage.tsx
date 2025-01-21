import { useState } from 'react';
import { Table, Tag, Space, Pagination } from 'antd'
import { useQuery } from '@apollo/client'
import { GET_ALL_TRANSACTIONS } from '../queries';
import type { TableProps } from 'antd';
import type { GetAllTransactionsDto, TransactionsDataDto } from '../dto';
import './BuyingsPage.scss'



interface DataType {
    key: string;
    name: string;
    price: number;
    date: string;
    time: string;
  }
  
  const columns: TableProps<DataType>['columns'] = [
    {
        title: 'Наименование товара',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Стоимость товара',
        dataIndex: 'price',
        key: 'date',
    },
    {
        title: 'Дата покупки',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Время покупки',
        dataIndex: 'time',
        key: 'time',
    },
  ];
  
  const data: DataType[] = [
    {
        key: '1',
        name: 'Xiaomi',
        price: 20000,
        date: '01.01.2023',
        time: '02:30',
    },
    {
        key: '2',
        name: 'Honor',
        price: 3000,
        date: '01.01.2023',
        time: '21:05',
    },
    {
        key: '3',
        name: 'Apple',
        price: 5000,
        date: '01.01.2023',
        time: '12:40',
    },
    {
        key: '4',
        name: 'Apple',
        price: 5000,
        date: '01.01.2023',
        time: '12:40',
    },
    {
        key: '5',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '6',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '7',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '8',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '9',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '10',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '11',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '12',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '13',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '14',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    },
    {
        key: '15',
        name: 'Sumsung',
        price: 8700,
        date: '01.01.2023',
        time: '07:12',
    }
  ];

export const BuyingsPage = () =>  {


    const jwt_token = localStorage.getItem('token')
    const { data: transactions } = useQuery(GET_ALL_TRANSACTIONS, { variables: { jwt_token }, skip: !jwt_token, fetchPolicy: 'network-only' })

    console.log(transactions, 'transactions data')

    return (
        <div className='buyings-page-container'>
           <Table 
                dataSource={data}  
                columns={columns}
                pagination={{pageSize: 10, total: data.length}}
            >

           </Table>
        </div>
    )
}


