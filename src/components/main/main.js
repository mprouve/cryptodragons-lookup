import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./home/home.js"
import PageNotFound from "./page-not-found/page-not-found.js"

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* 404 Route */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

export default Main
