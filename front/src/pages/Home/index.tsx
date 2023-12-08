import { TableOder } from "../../components/Table"
import { Header } from "../../components/Header"
import { useAtom } from "jotai"
import { ListOrders } from "../../Jotai/OrderList"
import { HeaderBody } from "../../components/HeaderTable"
import { api } from "../../services/api"
import { useEffect } from "react"
import { Order } from "../../@types/orderType"

const HomePage = () => {
    const [orders, setOrders] = useAtom(ListOrders)
    useEffect(() => {
        const req = async () => {
            try {
                const res = await api.get('orders/')
                console.log(res)
                setOrders(res.data)
            } catch (error) {
            }
        }
        req()
    }, [])

    const listFilter = orders.filter((el: Order) => el.is_open)

    return(
        <>
            <Header />
            <main className="w-[90vw] sm:w-[80vw] md:w-[60vw] mx-auto px-0 py-16">
                <HeaderBody />  
                <TableOder historic={false} list={listFilter} />
            </main>
        </>
    )
}

export default HomePage