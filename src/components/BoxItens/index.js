import React from 'react'

import { BoxItens as Box } from './styles'

function BoxItens({children, isBlur}){

    return <Box isBlur={isBlur}>{children}</Box>
}

export default BoxItens