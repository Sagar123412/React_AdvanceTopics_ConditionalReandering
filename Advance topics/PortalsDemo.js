import React from 'react'
import ReactDom from 'react-dom'

function PortalsDemo() {
    return ReactDom.createPortal(
        <div>
            Portals in React
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalsDemo
