import React, {useState} from 'react'

function CreateArea() {

    const [note, setNote] = useState({
        title:"",
        content:""
    });

    function valtozas(e) {
        const {name, value}=e.target
        setNote({
            ...note,
            [name]:value
        })
    }

    return(
        <form >
            <input 
            type="text" 
            onChange={valtozas}
            value={note.title}
            name='title' 
            placeholder='Cím'
             />
            <textarea 
            name="content" 
            onChange={valtozas}
            value={note.content}
            rows="3" 
            placeholder='Jegyzet'
            />
            <button>+</button>
        </form>
    )
}

export default CreateArea