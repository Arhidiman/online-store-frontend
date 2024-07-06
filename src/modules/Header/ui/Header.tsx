import {useAuthPageStore} from "@/pages/AuthPage/store/useAuthPageStore.ts"
import {UserOutlined, LogoutOutlined} from "@ant-design/icons"
import {useGlobalStore} from "@/store/useGlobalStore.ts"
import './Header.scss'
import {getLocalstorageItem} from "@/common/lib/getLocalstorageItem.ts";
import {useEffect, useState} from "react";

export const Header = () =>  {

    const {authUser} = useAuthPageStore()

    console.log(authUser)

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header-user'>
                    <UserOutlined/>
                    <p>{authUser.username}</p>
                    <LogoutOutlined/>
                </div>
            </div>
        </header>
    )
}


