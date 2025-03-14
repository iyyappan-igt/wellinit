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
import { ServiceData } from '../Constants/ServiceData'

function Home() {

    const themecode = "#DEFFFB"
    const fontcode = "#000"
    const iconbgcode  = "#000"
    const link_name = "/service"



    return (
        <section>


            <section>
                <Banner/>
            </section>

            <section>
                <Introduction/>
            </section>

            <section>
                <Whychoose/>
            </section>

            <section>
                <Ourservice 
                theme={themecode} 
                colorcode={fontcode} 
                servicess={ServiceData.Our_service}
                iconbg={iconbgcode}
                linkpage={link_name}
                />
            </section>

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
