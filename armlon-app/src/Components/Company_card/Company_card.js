import React from 'react';
import './Company_card.sass';

export default class CompanyCard extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="mission_card">
                    <div className="mission_img card_sides"></div>
                    <div className="mission_info card_sides">
                        <span className="_title">Mission and Vision</span>
                        <p className="_description">
                            We started back in 2015 and have grown to over 30 enpoyees. With a 
                            diverse team of highly competent talent, we ebable mobility solutions to 
                            enterprenerus and enterpises to overcome technology challengesof digital transformations.
                        </p>
                        <p className="_description">
                            We started back in 2015 and have grown to over 30 enpoyees. With a 
                            diverse team of highly competent talent, we ebable mobility solutions to 
                            enterprenerus and enterpises to overcome technology challengesof digital transformations.
                        </p>
                        <p className="_description">
                            Our team placed a strong focus on understanding the nuances of our 
                            costomer's businesses with a focus for quality and delivery.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

