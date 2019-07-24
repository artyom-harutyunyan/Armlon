import React from 'react';
import '../../App.sass';
import Nav from '../../Components/Header/Navbar';
import AppTop from '../../Components/AppTop/AppTopSide';
import Title from '../../Components/Header/PageTitle/PageTitles';
import CompanyCard from '../../Components/Company_card/Company_card';
import PartnersBanner from '../../Components/Partners/Partners';
import ServicesTitle from '../../Components/Services/Services_title';
import ServicesCard from '../../Components/Services/ServicesCards/ServicesCards';
import Footer from '../../Components/Footer/Footer';

export default class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <Title title="Building Digital Experiences"
                        subtitle="In the ever-changing world of digital transformation we works on bleeding edge technologies.
                                Our expertise lies in realising the goals of our clients." />
                
                <CompanyCard />
                <PartnersBanner />
                <ServicesTitle title="Main services"
                                subtitle="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />

                <div className="container">
                    <div className="ServicesCards">
                        <ServicesCard title="Web Development"
                                description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />
                        <ServicesCard title="Application Development"
                                description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />
                        <ServicesCard title="CRM"
                                description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />
                        <ServicesCard title="Digital Marketing"
                                description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />
                         <ServicesCard title="E-Commerce"
                                description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />
                        <ServicesCard title="UI/UX Design"
                                description="Lorem ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a 
                                galley of type and sqrambled it to make a type specimen book." />                                                                                               
                    </div>
                </div>
                <Footer />
                <AppTop />
            </div>
        )
    }
}