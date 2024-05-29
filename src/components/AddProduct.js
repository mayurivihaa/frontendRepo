import React from 'react'

const AddProduct = () => {
const [name , setName] = React.useState('');
const [price , setPrice] = React.useState('');
const [category , setCategory] = React.useState('');
const [company , setCompany] = React.useState('');

const addProduct = ()=>{
    console.log(name,price,category,company)
}

  return (
    <div className='inputs text-white'>
      <h1>Add Products</h1>
      <input type='text' value={name} onChange={(e)=>{setName(e.target.value)}}  placeholder='Enter Product Name'/>
      <input type='text' value={price} onChange={(e)=>{setPrice(e.target.value)}} placeholder='Enter Product Price'/>
      <input type='text'  value={category} onChange={(e)=>{setCategory(e.target.value)}}  placeholder='Enter Product Category'/>
      <input type='text'  value={company} onChange={(e)=>{setCompany(e.target.value)}} placeholder='Enter Product Campany'/>
      <button type='button' onClick={addProduct} className='btn'>Add Product</button>
    </div>
  )
}

export default AddProduct
