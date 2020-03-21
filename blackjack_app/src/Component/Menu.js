import React, { useState, useEffect } from 'react'
import axios from "axios"
import DrawCard from "./DrawCard"


const Menu =()=> {

    const [deckID, setDeckId]=useState(null)
    const insertID =(e)=>{
        e.preventDefault()
        setDeckId(e.target.elements[0].value)
    }

    const generateID = async()=>{
        try {
            let res  = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
            setDeckId(res.data.deck_id)
        } catch (error) {
            alert(error)
        }
    }

    const display=()=>{
        if(!deckID){
            return(
                <>
                <h3>Starting Menu</h3>
                <button onClick={generateID}>Generate Deck ID</button>
                <form onSubmit={(e)=>insertID(e)}>
                <input placeholder="Deck ID" required></input>
                <button>Draw</button>
                </form>
                </>
            )
        }else{
            return (
                <>
                <h3>Game Screen</h3>
                <p> Deck ID: {deckID}</p>
                <DrawCard deckID={deckID}/>
                </>
            )
        }
    }


        return (
            <div>
                {display()}
            </div>
        )
    }

export default Menu
