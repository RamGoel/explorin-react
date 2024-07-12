import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import WorkOrderCreation from './Dashboard.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider>
            <WorkOrderCreation />
        </ChakraProvider>
    </React.StrictMode>
)
