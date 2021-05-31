//Run a script to style a component
import React, { useEffect } from 'react'
import { useWindowSize } from '../utils/useWindowSize'

const withResizing = (BaseComponent,useEffectFn) => props => {
    const windowSize = useWindowSize()
    useEffect (() => {
        useEffectFn()
    },[windowSize])

    return <BaseComponent {...props}></BaseComponent>
}

export default withResizing