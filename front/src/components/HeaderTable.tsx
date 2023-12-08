import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Form from 'react-bootstrap/Form'
import { api } from '../services/api'
import { useAtom } from 'jotai'
import { ListOrders } from '../Jotai/OrderList'
import { Button } from './Button'

export const HeaderBody = () => {
    const [orders, setOrders] = useAtom(ListOrders)
    const search = async (sear: string) => {
        try {
            const res = await api.get(`orders/?cpf=${sear}`)
            setOrders(res.data)
            return orders
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className='flex flex-wrap justify-center sm:justify-between items-center lg:justify-evenly p-4 bg-slate-800 text-black'>
           <FloatingLabel onChange={(e: React.ChangeEvent<HTMLInputElement>) => search(e.target.value)} style={{ height: '4rem', width: '15rem' }} controlId="floatingInput" label="Procurar por cpf do cliente...">
                <Form.Control type="text" placeholder="Procurar por cpf do cliente..." />
            </FloatingLabel>

            <div className='w-[15rem] sm:w-[14rem] flex justify-between items-center'>
                <Button type='button' navegate='/entrada' bg='rgb(14 165 233)'>Entrada</Button>
                <Button type='button' navegate='/historico' bg='rgb(21 128 61)'>Historico</Button>
            </div>
        </div>
    )
}