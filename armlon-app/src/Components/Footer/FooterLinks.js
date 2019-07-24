import React from 'react';
import './FooterLinks.sass';

export default class FooterLinks extends React.Component {
    render() {
        return (
            <div className="footer_links">
                <div className="footer_contact_title">
                    {this.props.title}
                </div>     
                <div className="footer_link_items">
                    <a href="/">
                        {this.props.link_1}
                    </a>
                    <a href="/">
                        {this.props.link_2}
                    </a>
                    <a href="/">
                        {this.props.link_3}
                    </a>
                    <a href="/">
                        {this.props.link_4}
                    </a>
                    <a href="/">
                        {this.props.link_5}
                    </a>
                    <a href="/">
                        {this.props.link_6}
                    </a>
                </div>           
            </div>
        )
    }
}