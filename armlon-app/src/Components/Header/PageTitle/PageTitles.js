import React from 'react';
import './PageTitles.sass';

export default class Title extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="title_items">
                    <div className="PageTitle">
                        {this.props.title}
                    </div>
                    <div className="Page_subtitle">
                        {this.props.subtitle}
                    </div>
                </div>
            </div>
        )
    }
}