import { Route, Routes } from "react-router-dom"
import { Contact, Home, Login, Product, Products, Register, About } from '../View/index'
import { Footer, LateralMenu, Sidebar, TopMenu } from "../Components"

export const AppRouter = () => {
    return (
        <>
            <TopMenu />
            <LateralMenu />
            <Sidebar />
            <Routes>
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/" element={<Home />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/About" element={<About />} />
                <Route path="/Product/:id" element={<Product />} />
                <Route path="/Products" element={<Products />} />
            </Routes>
            <Footer />
        </>
    )
}