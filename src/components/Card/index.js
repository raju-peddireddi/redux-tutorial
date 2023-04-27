
import { Button } from "@mui/material"
import { useState } from "react"
import {connect} from 'react-redux'
import { AddProduct} from "../../actions"
import { DeleteProduct } from "../../actions"
import DeleteIcon from '@mui/icons-material/Delete';


import './index.css'

const Card = ({products, AddProduct, DeleteProduct}) => {
    const [item, setProductName] = useState('')
    const addProductEvent = async (event) => {
        event.preventDefault()
        if (item !== ''){
           await AddProduct({name: item})
         setProductName('')
        }
        setProductName('')
        

    }
    const onInputChange = event => {
        setProductName(event.target.value)
    }
return(<div className="card-container">
<form className="">
    <input className="input-element" value = {item} onChange={onInputChange}/>
    <Button type = 'submit' variant="outlined" sx={{color: 'green', mt: '20px', fontSize: '20px'}} disableElevation onClick = {addProductEvent}>
  Add Products
</Button>
</form>
<ul className="list-container">{products.map((eachItem, index) => <li key = {index} className="list-item"><p className="name">{eachItem.name}</p><DeleteIcon className="delete-icon" onClick = {() => DeleteProduct(eachItem.name)}/></li>)}</ul>
</div>)}

const mapStoreToProps = state => ({
    products: state
})
export default connect(mapStoreToProps, {AddProduct, DeleteProduct})(Card)