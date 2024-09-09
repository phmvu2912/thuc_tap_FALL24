import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderClient from '../../components/client/header/HeaderClient'

const LayoutClient = () => {
    return (
        <div className='bg-[#E7E7E3] min-h-screen'>
            <div className="container mx-auto py-6">

                <HeaderClient />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default LayoutClient