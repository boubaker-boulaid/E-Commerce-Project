import React, { useMemo } from 'react'
import { useResource } from '../hooks/useResource';
import { CartContext } from './CartContext';

function CartProvider({children}) {
    const {
        data:cartItems,
        error,
        actionToResource
    } = useResource("cart");

    const addUpdateCart = async (productId, quantity) => {
        const newCartData = {
            product_id: productId,
            quantity: quantity
        };
        await actionToResource(null,'post',newCartData);
    }

    const removeFromCart = async (cartId) => {
        await actionToResource(`/${cartId}`,'delete');
    }

    console.log('cart items', cartItems);

    const inCart = (productId) => {
        const target = cartItems.find(p => p.product_id === productId);
        
        return !!target;
    }

    const values = useMemo(() => ({
        cartItems,
        removeFromCart,
        addUpdateCart,
        error,
        inCart,
        cartItemsCount:cartItems.length
    }),[cartItems,error]);

    return <CartContext.Provider value={values}>{children} </CartContext.Provider>
}

export default CartProvider;
