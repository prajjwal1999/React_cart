import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
class App extends React.Component  {
  constructor(){
    super();
    this.state={
        products:[
            {
                price: 87,
                title: 'Mobile Phones',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlJTIwcGhvbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                id:1
            },
            {
               price: 47,
               title: 'Watch',
               qty: 1,
               img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
               id:2
           },
           {
               price: 17,
               title: 'Ipad',
               qty: 1,
               img: 'https://images.unsplash.com/photo-1589739900869-082b93d8f224?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8aXBhZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
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
 getCartCount=()=>{

    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    })
    return count;
 }
 getCartTotal=()=>{
   const {products}=this.state;
   let cartTotal=0;
   products.forEach((product)=>{
     cartTotal+=(product.price*product.qty)
   })
   return cartTotal;
 }
  render()
  {
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <Cart
      products={products}
       onIncreaseQty={this.handleIncreaseQty} 
       onDecreaseQty={this.handleDecreaseQty}
       onDeleteProduct={this.handleDeleteProduct}/>
       <div style={{padding:10,fontSize:20, border:"grey"}}>Total : {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
