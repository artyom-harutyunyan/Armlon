import React from 'react';
import './Footer.sass';
import FooterContact from './FooterContacts';
import FooterLinks from './FooterLinks';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="footer_items">
                        <FooterContact address="239 Kensington High Street W8 6SN London, United Kingdom"
                                        phone="+44(0) 207 316 3280"
                                        email="contactus@armlon.co.uk" />
                        <FooterLinks title="SERVICES"
                                        link_1="Web Development"
                                        link_2="Mobile Development"
                                        link_3="CRM"
                                        link_4="Digital Marketing"
                                        link_5="E-Commerce"
                                        link_6="UI/UX Design" />
                        <FooterLinks title="SOLUTIONS"
                                        link_1="Artifical intelligence"
                                        link_2="Cloud Commputing"
                                        link_3="Fintech"
                                        link_4="Machine Learning"/>
                        <FooterLinks title="COMPANY"
                                        link_1="About"
                                        link_2="Projects"
                                        link_3="Career"
                                        link_4="Contacts"/>
                    </div>
                </div>
            </div>
        )
    }
}