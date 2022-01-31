import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from '../components/CreateArea'

function App(){

    const [notes,setNotes]=useState([])

    function hozzaad(uj) {
        setNotes([...notes,uj])
    }

    function torol(id) {
        setNotes(notes.filter((n,index)=>index!=id))
    }

    return(<div>
        <Header />
        <CreateArea atad={hozzaad} />
        {notes.map((n,index)=>
        <Note
            key={index}
            id={index}
            title={n.title}
            content={n.content}
            torles={torol}
            /> )}
        <Footer/>
    </div>)
}

export default App
