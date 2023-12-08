import { Paginate } from './Paginate'
import React from 'react'
import { Order } from '../@types/orderType'

type Tprops = {
    list: Order[];
    historic: boolean;
}
export const TableOder: React.FC<Tprops> = ({list, historic}) => {
    const listTiles = ['#', 'Nome' , 'CPF', 'Entrada', 'Descrição', 'Valor', 'Status']

    return(
        <div className='flex flex-col items-center'>
           <Paginate historic={historic} listOrder={list} listTiles={listTiles} key={0} />
        </div>    
      )
}