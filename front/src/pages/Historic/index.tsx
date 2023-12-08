import { Button } from "../../components/Button"
import { ListOrders } from "../../Jotai/OrderList"
import { Header } from "../../components/Header"
import { TableOder } from "../../components/Table"
import { useAtom } from "jotai"

const HistoricPage = () => {
    const [orders] = useAtom(ListOrders)

    return(
        <>
            <Header />
            <main className="w-[90vw] sm:w-[80vw] md:w-[60vw] mx-auto px-0 py-16">
                <Button type="button" bg="rgb(250 204 21)" navegate="/">Voltar</Button>
                <TableOder historic={true} list={orders} />
            </main>
        </>
    )
}

export default HistoricPage