    import React from 'react'
    import Navbar from '../components/Navbar'
    import { Link } from 'react-router-dom'

    const Home = () => {
    return (
        <div className='h-screen'>
        <Navbar />
        <div className='flex p-4 mt-16 h-screen items-center justify-center flex-col'>
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-angkor'>aymongush </h1>
            <p className=''>Hey, I am Aayush Poudel</p>
            <p className='ml-6 text-center sm:ml-4 md:ml-0'>A React developer who enjoys coding and creating websites.</p>

            <Link className='rounded-sm bg-black font-body text-white decoration-transparent p-3 mt-6' to='mailto:aayushpoudel59@gmail.com'>Connect with me > </Link>
        </div>
        </div>
    )
    }

    export default Home
