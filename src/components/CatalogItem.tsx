import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../store";
import { addProductToCartRequest } from "../store/modules/cart/actions";
import { IProduct } from "../store/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}

export function CatalogItem({ product }: CatalogItemProps) {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(addProductToCartRequest(product));
  }, [dispatch, product]);
  
  const hasFailedStockCheck = useSelector<IState, boolean>(state => {
    return state.cart.failedStockCheck.includes(product.id);
  })

  return (
    <article key={product.id}>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span>{' '}

      <button 
        type="button" 
        onClick={handleAddProductToCart}
        style={{
          borderRadius: '16px', 
          border: 'none', 
          padding: '6px 10px', 
          marginTop: '8px', 
          cursor: 'pointer'
        }}
        disabled={hasFailedStockCheck}
      >
        Comprar
      </button>

      { hasFailedStockCheck && <span style={{color: 'red', fontFamily: 'sans-serif', marginLeft: '.5rem'}}>Falta de estoque.</span>}
    </article>
  )
}