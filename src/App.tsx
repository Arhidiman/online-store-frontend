
import {AppRouter} from "@/AppRouter/AppRouter.tsx"
import {Header} from "@/modules/Header"
import {useState, useEffect} from "react";
import axios, {AxiosError, AxiosResponse} from "axios";
import {BASE_URL} from "@/common/constants/baseUrl.ts";

function App() {

    const [user, setUser] = useState(null)
    const [error, setError] = useState<AxiosError | null>(null)

    useEffect(() => {
        const getUser = async () => {
            try {
                const res: AxiosResponse = await axios.get(BASE_URL)
                console.log(res)
                setUser(res.data)
            } catch (err) {
                console.log(err)
                setError(err.message)
            }
        }
        getUser()

        console.log(user)
    }, [user])

    return (
        <>
            <Header/>
            <AppRouter/>
            <div>{user}</div>
        </>
    )
}

export default App
