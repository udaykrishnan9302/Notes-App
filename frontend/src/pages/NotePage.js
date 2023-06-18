import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
const NotePage = ({match}) => {

  const location = useLocation();
  const noteId = location.pathname.split('/').pop();
   let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])


    let getNote = async () => {
        let response = await fetch(`/api/notes/${noteId}/`)
        let data = await response.json()
        console.log(note)
        setNote(data)
    } 
  return (
    <div><h1>{note?.body}</h1></div>
  )
}

export default NotePage