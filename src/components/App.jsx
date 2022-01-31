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

    return(<div>
        <Header />
        <CreateArea atad={hozzaad} />
        {notes.map((n,index)=>
        <Note
            key={index}
            id={index}
            title={n.title}
            content={n.content}/> )}
        <Footer/>
    </div>)
}

export default App
