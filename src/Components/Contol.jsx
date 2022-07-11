import React, { useEffect } from 'react'
import base from "../base.json"

export default function Contol(props) {

    const formAdd = (e) => {

        e.preventDefault();
        props.setState(false);

        // input value ""

        props.setPostDesc("");
        props.setPostName("");
        props.setPostUrl("");

        // close active mode
        props.active.current.classList.remove("control-active");

        // Adding post
        base.unshift(
            {
                name: props.postName,
                url: props.postUrl,
                desc: props.postDesc
            }
        );

        // Saving To Local Storage
        localStorage.setItem("posts", JSON.stringify(base))
    }

    return (
        <main ref={props.active}>
            <div className="container">
                <h1 className='text-center m-2'>ADDING POST</h1>

                <form onSubmit={formAdd}>
                    <label htmlFor="name">Name:</label>
                    <input value={props.postName} onChange={(e) => props.setPostName(e.target.value)} name='name' type="text" className='form-control' placeholder='name' required />
                    <label htmlFor="url">Image Url:</label>
                    <input value={props.postUrl} onChange={(e) => props.setPostUrl(e.target.value)} name='url' type="text" className='form-control' placeholder='url' required />
                    <label htmlFor="desc">Description:</label>
                    <textarea value={props.postDesc} onChange={(e) => props.setPostDesc(e.target.value)} name="desc" placeholder='some text' className='form-control' cols="30" rows="10" required></textarea>
                    <button className='btn btn-success my-3'>ADD TO DO</button>
                </form>
            </div>
        </main>
    )
}
