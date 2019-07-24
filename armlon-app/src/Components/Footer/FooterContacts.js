import React from 'react';
import './FooterContacts.sass';
import fbIcon from '../../Img/fb.png';
import instaIcon from '../../Img/insta.png';
import youtubeIcon from '../../Img/youtube.png';
import footerLogo from '../../Img/Logo.png';

export default class FooterContact extends React.Component {
    render() {
        return (
            <div className="footer_contacts">
                <div className="footer_logo">
                    <img src={footerLogo} className="footer_logo_icon" />
                </div>
                <div className="footer_line"></div>
                <div className="footer_contact_title">
                    Contact
                </div>
                <div className="footer_contact_items">
                    <div>
                        {this.props.address}
                    </div>
                    <div>
                        {this.props.phone}
                    </div>
                    <div className="email">
                        {this.props.email}
                    </div>
                </div>
                <div className="footer_social">
                    <div className="footer_social_icon">
                        <a href="/">
                            <img src={fbIcon} className="icon_ls" />
                        </a>
                    </div>
                    <div className="footer_social_icon">
                        <a href="/">
                            <img src={instaIcon} className="icon_ls" />
                        </a>
                    </div>
                    <div className="footer_social_icon">
                        <a href="/">
                            <img src={youtubeIcon} className="icon_ls" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}