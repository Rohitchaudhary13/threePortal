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
            position: [ 1, 1, 3 ]
        } }
    >
        <color args={ [ '0xff0000' ] } attach="background" />
        <Experience />
    </Canvas>
)
