import { useSelector } from "react-redux"
import { IState } from "../store"
import { ICartItem } from "../store/modules/cart/types"

export function Cart() {
  const cart = useSelector<IState, ICartItem[]>(state => state.cart.items)

  return (
    <table style={{marginTop: '20px'}}>
      <thead>
        <tr>
          <th style={{
            padding: '8px', 
            textAlign: 'center'
          }}>
            Product
          </th>
          <th style={{
            padding: '8px', 
            textAlign: 'center'
          }}>
            Price
          </th>
          <th style={{
            padding: '8px', 
            textAlign: 'center'
          }}>
            Quantity
          </th>
          <th style={{
            padding: '8px', 
            textAlign: 'center'
          }}>
            Total
          </th>
        </tr>
      </thead>
      <tbody>
        {cart.map(item => (
          <tr key={item.product.id}>
            <td style={{
              padding: '8px', 
              textAlign: 'center'
            }}>
              {item.product.title}
            </td>
            <td style={{
              padding: '8px', 
              textAlign: 'center'
            }}>
              {item.product.price}
            </td>
            <td style={{
              padding: '8px', 
              textAlign: 'center'
            }}>
              {item.quantity}
            </td>
            <td style={{
              padding: '8px', 
              textAlign: 'center'
            }}>
              {(item.product.price * item.quantity).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}