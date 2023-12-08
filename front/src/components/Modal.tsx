import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useAtom } from 'jotai'
import { ModalIsOpen } from '../Jotai/Modal'
import { ListOrders } from '../Jotai/OrderList'
import { api } from '../services/api'


export const ModalFinish = ({idOrder}: any) => {
    const [orders, setOrders] = useAtom(ListOrders)
    const [modalIsOpen, setModalIsOpen] = useAtom(ModalIsOpen)

    const handleClose = () => setModalIsOpen(false);

    const req = async (id: string) => {
        setModalIsOpen(!modalIsOpen)
        const isOpenOrder = orders.filter((el) => el.is_open)
        const filterOrders = isOpenOrder.filter((el) => el.id != Number(id))
        try {
            await api.patch(`orders/${id}/`, {is_open: false})
            setOrders(filterOrders)
            return orders
        } catch (error) {
        }
    }
  return (
    <>
      <Modal
        show={modalIsOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ordem</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Deseja finalizar a manutenção?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalIsOpen(!modalIsOpen)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => req(idOrder)}>Concluir</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
