import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <Canvas
        flat
        camera={ {
            fov: 75,
            near: 0.1,
            far: 50,
            position: [ 1, 2, 4 ]
        } }
        style={{ background: 'transparent' }} // Set background to transparent
        onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0); // Set clear color to black with alpha 0 for transparent background
        }}
    >
        <Experience />
    </Canvas>
)
