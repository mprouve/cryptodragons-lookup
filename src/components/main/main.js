import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './home/home.js'
import User from './user/user.js'
import Dragon from './dragon/dragon.js'
import Egg from './egg/egg.js'
import PageNotFound from './page-not-found/page-not-found.js'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:address" element={<User />} />
        <Route path="/dragon/:dragonId" element={<Dragon />} />
        <Route path="/egg/:eggId" element={<Egg />} />

        {/* 404 Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default Main
