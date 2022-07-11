import React, { useRef, useState } from 'react';
import Contol from './Components/Contol';
import Header from './Components/Header';
import Todos from './Components/Todos';

function App() {

  // Controll Opening
  const active = useRef();
  // Addnig post
  const [state, setState] = useState(false)
  const [postName, setPostName] = useState("");
  const [postUrl, setPostUrl] = useState("");
  const [postDesc, setPostDesc] = useState("");

  return (

    <>

      <Header />

      <Contol
        active={active}
        postName={postName}
        postUrl={postUrl}
        postDesc={postDesc}
        setState={setState}
        setPostUrl={setPostUrl}
        setPostDesc={setPostDesc}
        setPostName={setPostName}
      />

      <Todos
        setState={setState}
        state={state}
        active={active}
      />

    </>
  );
}

export default App;
