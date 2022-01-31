import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from '../notes'
import CreateArea from '../components/CreateArea'

function App(){
    return(<div>
        <Header />
        <CreateArea/>
        {notes.map(n=>
        <Note
            key={n.key}
            title={n.title}
            content={n.content}/> )}
        <Footer/>
    </div>)
}

export default App
