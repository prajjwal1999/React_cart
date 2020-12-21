 import React from 'react';

 const CartItems=(props)=>{
 
   
 
         console.log('this props',props);
         const { price, title, qty}=props.product;
         const {product, onIncreaseQty, onDecreaseQty, onDeleteProduct}=props;
         return (
             <div className="cart-item">
                 <div className="left-block">
                     <img style={styles.image}/>

                 </div>
                 <div className="right-block">
                     <div style={{frontSize:25}}>{title}</div>
                     <div style={{color:'#777'}}>Rs {price}</div>
                     <div style={{color:'#777'}}>Qty: {qty}</div>
                     <div className="cart-item-actions">
                        <img 
                        alt="increase" 
                        className="action-icons" 
                        src="https://www.flaticon.com/svg/static/icons/svg/1828/1828919.svg"
                        onClick={()=>(onIncreaseQty(product))}
                        />
                        <img
                         alt="decrease" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/static/icons/svg/1828/1828899.svg"
                         onClick={()=>(onDecreaseQty(product))}
                         />
                        <img
                         alt="delete" 
                         className="action-icons" 
                         src="https://www.flaticon.com/svg/static/icons/svg/565/565491.svg"
                         onClick={()=>(onDeleteProduct(product.id))}
                         />

                     </div>
                 </div>
             </div>
         );
     }
 
 const styles={
     image :{
         height:110,
         width:110,
         borderRadius:4,
         background: '#ccc'
     }
 }
 export default CartItems;