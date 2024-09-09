import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayoutClient from '../pages/client/LayoutClient'

type Props = {}

const Routing = (props: Props) => {
  return (
    <>
        {/* Client*/}
        <Routes>
            <Route path='/' element={<LayoutClient />}>
                <Route index element={''}/>
                <Route path='/' element={''}/>
                <Route path='/' element={''}/>
                <Route path='/' element={''}/>
            </Route>
        </Routes>
    </>
  )
}

export default Routing