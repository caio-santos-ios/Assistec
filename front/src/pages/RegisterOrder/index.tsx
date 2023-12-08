import { Header } from "../../components/Header"
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Spinner from 'react-bootstrap/Spinner'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { api } from "../../services/api"
import { toast } from "react-toastify"
import { useState } from "react"
import { Button } from "../../components/Button"

const RegisterOrderPage = () => {
    const [loanding, setLoanding] = useState(false)
    const { register, handleSubmit, reset } = useForm()

    const dateNew = new Date
    const dia = dateNew.getDate()
    const mes = dateNew.getMonth() + 1
    const ano = dateNew.getFullYear()

    const dataFormatada = `${dia}/${mes}/${ano}`

    const req: SubmitHandler<FieldValues> = async (data) => {
        if (!data.name || !data.cpf || !data.date || !data.status || data.status == "Status do Serviço" || !data.value) {
            toast.error('Preencha todos os campos!')
            return;
        }
        
        setLoanding(true)
        try {
            await api.post('orders/', data)
            toast.success('Ordem criada!')
            reset()
            setLoanding(false)
        } catch (error) {
            setLoanding(false)
        }
    }
    return(
        <>
            <Header />
            <main className="flex justify-center items-center w-[90vw] sm:w-[80vw] md:w-[60vw] mx-auto px-0 py-16">
                <section className="flex flex-col items-start gap-24">
                    <Button type="button" bg="rgb(250 204 21)" navegate="/">Voltar</Button>
                    <form className="flex flex-col gap-2" onSubmit={handleSubmit(req)}>
                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">Nome</Form.Label>
                            <Form.Control {...register('name')} aria-describedby="passwordHelpBlock"/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="inputPassword5">CPF</Form.Label>
                            <Form.Control {...register('cpf')} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Data de Entrada</Form.Label>
                            <Form.Control {...register('date')} value={dataFormatada}/>
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control {...register('description')} as="textarea" rows={3} />
                        </Form.Group>

                            <InputGroup className="mb-3">
                            <InputGroup.Text>R$</InputGroup.Text>
                            <Form.Control {...register('value')}/>
                            <InputGroup.Text>.00</InputGroup.Text>
                        </InputGroup>

                        <Form.Select {...register('status')} aria-label="Default select example">
                            <option disabled>Status do Serviço</option>
                            <option value="em processo">Em processo</option>
                            <option value="aguardando peca">Aguardando peça</option>
                        </Form.Select>
                        <div className="flex justify-center	"> 
            
                        {
                            loanding ? 
                            <Button type="submit" bg="rgb(21 128 61)" navegate="">
                                <Spinner className="cursor-progress" animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner> 
                            </Button>
                            :
                            <Button type="submit" bg="rgb(21 128 61)" navegate="">Entrada</Button>
                        }
                        </div>
                    </form>
                </section>
            </main>
        </>
    )
}

export default RegisterOrderPage