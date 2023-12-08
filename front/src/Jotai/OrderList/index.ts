import { atom } from 'jotai'
import { Order } from '../../@types/orderType'

export const ListOrders = atom<Order[]>([])