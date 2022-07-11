import React from 'react'
import { useState } from 'react'
import base from "../base.json"

export default function Todos(props) {

    // Toggle Control
    console.log(props.state);

    // Search Posts
    const [onSearch, setOnSearch] = useState("");

    const search = base.filter(e => (
        e.name.toLowerCase().includes(onSearch.toLowerCase())
    ));

    // Control Active
    const post = () => {
        props.active.current.classList.toggle("control-active");
        props.setState(e => !e);
    }

    const removePost = (e) => {
      console.log(e);
    }

    return (
        <section className='container'>

            <input onChange={(e) => setOnSearch(e.target.value)} type="search" className='search form-control' placeholder='Search by name...' />
            <div id='add' onClick={post}>
                {!props.state? "+" : "-"}
            </div>

            {search.map((e, id) => (
                <div onClick={() => removePost(id)} key={id} className="card bg-dark text-light">
                    <div className="card-header">
                        <img src={e.url} alt={id} />
                    </div>
                    <div className="card-body">
                        <h2>{e.name}</h2>
                    </div>
                    <div className="card-footer">
                        <p>{e.desc}</p>
                    </div>
                </div>
            ))}
        </section>
    )
}
