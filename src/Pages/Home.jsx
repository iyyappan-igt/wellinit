import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Experience from '../Components/Experience'
import Introduction from '../Components/Introduction'
import Whychoose from '../Components/Whychoose'
import Ourservice from '../Components/Ourservice'
import Success from '../Components/Success'
import Security from '../Components/Security'
import Blogs from '../Components/Blogs'
import Letstalk from '../Components/Letstalk'
import Footer from '../Components/Footer'
import Securebanner from '../Components/Securebanner'

function Home() {
    return (
        <section>


            <section>
                <Banner/>
            </section>

            {/* <section>
                <Experience/>
            </section> */}

            <section>
                <Introduction/>
            </section>

            <section>
                <Whychoose/>
            </section>

            <section>
                <Ourservice/>
            </section>

            {/* <section>
                <Success/>
            </section> */}

            <section>
                <Security/>
            </section>


            <section>
                <Securebanner/>
            </section>

            <section>
                <Blogs/>
            </section>

            <section>
                <Letstalk/>
            </section>



        </section>
    )
}

export default Home
