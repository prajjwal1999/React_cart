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
handleIncreaseQty=(product)=>{
    console.log("hey incraese Qty by 1");
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
}
handleDecreaseQty=(product)=>{
    console.log("hey decraese Qty by 1");
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty===0)
    return;
    products[index].qty-=1;
    this.setState({
        products:products
    })

}
handleDeleteProduct=(id)=>{
    const {products}=this.state;
    const items=products.filter((item)=>item.id!==id);
    this.setState({
        products:items
    })
}
    render()
    {
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return <CartItems 
                    product={product} 
                    key={product.id} 
                    onIncreaseQty={this.handleIncreaseQty} 
                    onDecreaseQty={this.handleDecreaseQty}
                    onDeleteProduct={this.handleDeleteProduct}
                    />
                })}
              
            </div>
        );
    }

    
}

export default Cart;