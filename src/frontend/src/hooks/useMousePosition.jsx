import React, { useEffect, useState } from 'react'

export default function useMousePosition() {
    let [position, setPosition] = useState({x: 0, y: 0})

    const updateMousePosition = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
    }

    useEffect(() => {
        window.addEventListener('mousemove', (e) => updateMousePosition(e))
        return () => window.removeEventListener('mousemove', (e) => updateMousePosition(e))
    })

    return position
}
