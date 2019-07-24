import React from 'react';
import './Partners.sass';

export default class PartnersBanner extends React.Component {
    render() {
        return (
            <div>
                <div className="Partner_banner">
                    <div className="container">
                        <div className="Partners_banner_title">Our Partners</div>
                        <div className="Partners_banner_subtitle">
                            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem
                            ipsum has been the industrys standard dummy text ever since the 1500s, when an 
                            unknown printer took a galley of type and sqrambled it to make a type specimen
                            book.
                        </div>
                        <div className="Pratners_list">
                            <div className="Partner_names">
                                <span className="__names">Commerce</span>
                                <span className="__names">Aplication</span>
                                <span className="__names">Web Sites</span>
                                <span className="__names">CRM</span>
                            </div>
                            <div className="Partner_icons">
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            <div className="__icons"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}