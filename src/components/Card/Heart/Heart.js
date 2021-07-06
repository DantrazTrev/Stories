import React from 'react'
import './Heart.css'

export default function Heart({Liked,Like}) {
       return (
        
<div id="button" className={Liked?'heart ed':'heart'} onClick={()=>{Like()}}></div>
    )
}
