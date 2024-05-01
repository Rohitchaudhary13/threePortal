import { shaderMaterial, Sparkles, Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame, extend } from '@react-three/fiber'
import { useRef, useEffect } from 'react'



extend({ OrbitControls })

export default function Experience()
{
    return <>

        <OrbitControls enableZoom={false} />
        <Center>
            <Sparkles
		        size={ 6 }
                scale={ [ 10, 2, 4 ] }
                position-y={ 1 }
                speed={ 1 }
                count={ 40 }
                color={ '#000' }
            />
        </Center>

    </>
}
