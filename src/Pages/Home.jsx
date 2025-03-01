import React from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Experience from '../Components/Experience'
import Introduction from '../Components/Introduction'
import Whychoose from '../Components/Whychoose'
import Ourservice from '../Components/Ourservice'

function Home() {
    return (
        <section>

            <section>
                <Header/>
            </section>

            <section>
                <Banner/>
            </section>

            <section>
                <Experience/>
            </section>

            <section>
                <Introduction/>
            </section>

            <section>
                <Whychoose/>
            </section>

            <section>
                <Ourservice/>
            </section>

        </section>
    )
}

export default Home
