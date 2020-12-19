import React from 'react';
import CartItems from './CartItem'
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
            products:[
                {
                    price: 87,
                    title: 'Mobile Phones',
                    qty: 1,
                    img: '',
                    id:1
                },
                {
                   price: 47,
                   title: 'Watch',
                   qty: 1,
                   img: '',
                   id:2
               },
               {
                   price: 17,
                   title: 'Ipad',
                   qty: 1,
                   img: '',
                   id:3
               }
            ]
          
        
    }
}
    render()
    {
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItems product={product} key={product.id}/>
                })}
              
            </div>
        );
    }

    
}

export default Cart;