import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar'
import firebase from 'firebase/app'
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class App extends React.Component  {
  constructor(){
    super();
    this.state={
        products:[], 
        loading:true
       }
       this.db=firebase.firestore();
}
  componentDidMount(){
    /*firebase
    .firestore()
    .collection('products')
    .get()
((snapshot)=>{
      console.log(snapshot)
      snapshot.docs.map((doc)=>{
        console.log(doc.data())
      })
  
    const products=snapshot.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return data;

    })
    this.setState({
      products,
      loading:false
    })
  })*/
  this.db
  .collection('products')
  .onSnapshot((snapshot)=>{
    console.log(snapshot)
    snapshot.docs.map((doc)=>{
      console.log(doc.data())
    })

  const products=snapshot.docs.map((doc)=>{
    const data=doc.data();
    data['id']=doc.id;
    return data;

  })
  this.setState({
    products,
    loading:false
  })
  })
}
handleIncreaseQty=(product)=>{
console.log("hey incraese Qty by 1");
const {products}=this.state;
const index=products.indexOf(product);
/*products[index].qty+=1;
this.setState({
    products:products
})*/
const docRef=this.db.collection('products').doc(products[index].id);
docRef
.update({
  qty:products[index].qty+1
})
.then(()=>{
  console.log("updated Successfuly");
})
.catch((error)=>{
  console.log("error",error)
})
}
handleDecreaseQty=(product)=>{
console.log("hey decraese Qty by 1");
const {products}=this.state;
const index=products.indexOf(product);
if(products[index].qty===0)
return;
/*products[index].qty-=1;
this.setState({
    products:products
})*/
const docRef=this.db.collection('products').doc(products[index].id);
docRef
.update({
  qty:products[index].qty-1
})
.then(()=>{
  console.log("updated Successfuly");
})
.catch((error)=>{
  console.log("error",error)
})

}
handleDeleteProduct=(id)=>{
const {products}=this.state;
/*const items=products.filter((item)=>item.id!==id);
this.setState({
    products:items
})*/
const docRef=this.db.collection('products').doc(id);
docRef
.delete()
.then(()=>{
  console.log("delete Successfuly");
})
.catch((error)=>{
  console.log("error",error)
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
 addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'data:image/jpeg;base64,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',
    title:'Nexus',
    qty:9,
    price:3000
  })
  .then((docref)=>{
    console.log('Product added',docref)

  })
  .catch((error)=>{
    console.log("error is ",error) 

  })
 }
  render()
  {
    const {products}=this.state;
  return (
    <div className="App">
      <Navbar count={this.getCartCount()}/>
      <button onClick={this.addProduct} style={{fontSize:20, padding:20}}>Add a Product</button>
      <Cart
      products={products}
       onIncreaseQty={this.handleIncreaseQty} 
       onDecreaseQty={this.handleDecreaseQty}
       onDeleteProduct={this.handleDeleteProduct}
       />
       {<Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={1000}/>}
       <div style={{padding:10,fontSize:20, border:"grey"}}>Total : {this.getCartTotal()}</div>
    </div>

  );
  }
}

export default App;
