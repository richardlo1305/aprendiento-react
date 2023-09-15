import { useState, useEffect } from "react"

const  FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {

    const handleMouse = (event) =>{
      const {clientX, clientY} = event;
      setPosition({x: clientX, y: clientY});
    }
    if(enable)
      window.addEventListener('mousemove', handleMouse);

    return () => {
      window.removeEventListener('mousemove', handleMouse);
      setPosition({x:0, y:0});
    }
  }, [enable])
  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => setEnable(!enable)}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </main>
  )
}


function App() {
  const [showButton, setShowButton] = useState(false);
  return (
          <>
          { showButton && <FollowMouse/> }
          <button onClick={() => setShowButton(!showButton)}>{showButton ? 'Ocultar' : 'Mostrar'} boton</button>
          </>
        )
}

export default App
