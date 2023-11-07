import {useState, useEffect } from "react"
import "./SearchBar.css"

export default function SearchBar() {
    const [filterProducts, setFilteredProducts] = useState([])
    const [searchString, setSearchString ] = useState("")
    useEffect(fetchAPIData, [])
    function fetchAPIData() {
        fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(products => {
            const filtered = products.filter((el)=>{return el.title.toLowercase().includes(searchString.toLowerCase())})
            const currentFilter = filtered.map((product, index) => {
                return (<div className="prodStyle">
                    <p style={{fontSize:"1rem"}}>{product.title}</p>
                    <p>{product.price}</p>
                    <img style={{width:"125px"}} src={product.image} alt={product.title}/>
                </div>)
            })
            setFilteredProducts(currentFilter)
        })
    }
    
    function handleChange(event){
        setSearchString(event.target.value)
    }
    return <div>
        <p>The Search Bar</p>
        <input type="test" value={searchString} onChange={handleChange} />
        <div style={{display:"flex", flexFlow:"row wrap"}}>{filterProducts}</div>
    </div>
}