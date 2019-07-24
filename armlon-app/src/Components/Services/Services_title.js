import React from 'react';
import './Services_title.sass';

export default class ServicesTitle extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="services__title">
                    {this.props.title}
                </div>
                <div className="services__subtitle">
                    {this.props.subtitle}
                </div>
            </div>
        );
    }
}