import React, {useState} from 'react'

function CreateArea(props) {

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

    function elkuldes(e) {
        props.atad(note)
        setNote({
            title:"",
            content:""
        })
        e.preventDefault()
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
            <button onClick={elkuldes}>+</button>
        </form>
    )
}

export default CreateArea