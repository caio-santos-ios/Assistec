import React, { useState } from "react"
import Table from 'react-bootstrap/Table'
import Pagination from 'react-bootstrap/Pagination'
import { Order } from "../@types/orderType"
import { BsFillCheckSquareFill } from 'react-icons/bs'
import { useAtom } from "jotai"
import { ModalFinish } from "./Modal"
import { ModalIsOpen } from "../Jotai/Modal"

type Tprops = {
    listOrder: Order[];
    listTiles: string[];
    historic: boolean;
}

export const Paginate: React.FC<Tprops> = ({listOrder, listTiles, historic}) => {
    const [idOrder, setIdOrder] = useState('')
    const [modalIsOpen, setModalIsOpen] = useAtom(ModalIsOpen)

    const [itens] = useState(listOrder)
    const [itensPerPage] = useState(10)
    const [currentPage, setCurrentPage] = useState(0)

    const pages = Math.ceil(itens.length / itensPerPage)

    const startIndex = currentPage * itensPerPage
    const endIndex = startIndex + itensPerPage
    const currentItens = listOrder.slice(startIndex, endIndex)

    const req = (id: string) => {
        setModalIsOpen(!modalIsOpen)
        setIdOrder(id)
    }
    return(
        <>
            <Table>
                <ModalFinish idOrder={idOrder} />
                <thead className='text-xs lg:text-lg'>
                    <tr>
                        {
                            listTiles.map(title => {
                                return <th key={title}>{title}</th>
                            })
                            
                        }
                    </tr>
                </thead>
                <tbody className='text-xs lg:text-lg overflow-x-auto'>
                    {
                        historic ? 
                            currentItens.map(el => {
                                return(
                                        <tr key={el.id}>
                                            <td>{el.id}</td>
                                            <td>{el.name}</td>
                                            <td>{el.cpf}</td>
                                            <td>{el.date}</td>
                                            <td>{el.description}</td>
                                            <td>{el.value}</td>
                                            <td>Concluido</td>
                                        </tr>                                     
                                )
                            })
                        :
                        currentItens.map(el => {
                            return(
                                el.is_open ? 
                                    <tr key={el.id}>
                                        <td>{el.id}</td>
                                        <td>{el.name}</td>
                                        <td>{el.cpf}</td>
                                        <td>{el.date}</td>
                                        <td>{el.description}</td>
                                        <td>{el.value}</td>
                                        <td>{el.status}</td>
                                        {
                                            historic ? null : 
                                            <button id={String(el.id)} onClick={(e) => req(e.currentTarget.id)} className="border-0">
                                                <BsFillCheckSquareFill />
                                            </button>
                                        }
                                    </tr> 
                                :
                                null                                    
                            )
                        })
                        
                    }
                </tbody>
            </Table>
            <Pagination>
                {Array.from(Array(pages), (itens, index) => {
                    return(
                            <Pagination.Item value={itens} id={String(index)} key={index} onClick={(e) => setCurrentPage(Number(e.currentTarget.id))}>{index + 1}</Pagination.Item>
                            
                            )
                        })}
            </Pagination>
        </>
    )
}