import React from 'react'
const styles = {
    img: {
        height: "200px",
        width: "300"
    }
}
const Cards =({img})=>{
    return (
        <img src ={img} style = {styles.img} alt =""></img>
    )
}

export default Cards;