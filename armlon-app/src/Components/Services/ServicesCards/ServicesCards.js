import React from 'react';
import './ServicesCards.sass';

export default class ServicesCard extends React.Component {
    render() {
        return (
            <div className="srv_card">
                <div className="srv_card_title">
                    {this.props.title}
                </div>
                <div className="srv_card_description">
                    {this.props.description}
                </div>
            </div>
        );
    }
}