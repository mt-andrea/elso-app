import React, {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from '../components/CreateArea'

function App(){

    const [notes,setNotes]=useState([])

    function hozzaad(uj) {
        const url='http://localhost:5000/notes'
        fetch(url,{
            method:'post',
            headers:{'Content-type':'application/json;charset=utf-8'},
            body: JSON.stringify({
                'title':uj.title,
                'content':uj.content
            })

        })
        .then(()=>beolvas())
        .catch(err=>console.log(err))
    }

    function torol(id) {
        const url='http://localhost:5000/notes'+id
        fetch(url,{
            method:'delete'
        })
        .then(()=>beolvas())
        .catch(err=>console.log(err))
    }
    function beolvas() {
        fetch('http://localhost:5000/notes')
        .then((res)=>res.json())
        .then((json)=>setNotes(json))
        .catch(err=>console.log(err))
    }
    useEffect(() => {
        beolvas()
    }
    , []);

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
