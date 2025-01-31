import { useState, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import Form from "./components/Form"
import Card from "./components/Card"
import Home from "./components/Home"
import Watch from "./components/Watch"
import Single from "./components/Single"
import axios from "axios"


const App =()=> {

// Initalizing state
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: ''
    })

    const [ users, setUsers] = useState([])

    // fetch call
    useEffect(() => {
        axios.get(`http://localhost:3005/api/user`).then(res => setUsers(res.data))
    }, [])


// Form functionality
    const handleChange = (event)=> {
        const {name, value} = event.target

        setFormData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()
        console.log(formData)
        axios({
            method: 'post',
            url: 'http://localhost:3005/api/user/create',
            data: formData
        })
    }
    

    // Route paths and connecting my components
    return(
        <>
            <Header />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path='/login' element={
                    <Form
                        formData={formData}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                />} />
                <Route path='/watches' element={ <Watch />} />
                <Route path='/:path/:id' element=
                {<Single />} />
                <Route path="*" element={ <Error /> } />
            </Routes>
            <Footer />
        </>
    )
}

export default App