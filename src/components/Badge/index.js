import { Button } from "@mui/material"
import { connect } from "react-redux"
import './index.css'
const Badge = ({products}) => (
  <div className="badge-container">
    <Button variant = "contained" sx={{fontSize: '20px'}}>Total Products</Button>
    <span className="count">{products.length}</span>
  </div>
 
)

const mapStoreToProps = state => ({
    products: state
})
export default connect(mapStoreToProps)(Badge)