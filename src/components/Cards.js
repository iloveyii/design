import React from 'react';
import banner from "../banner.png";

class Cards extends React.Component {
    render() {
        return (
            <section id="cards">
                <div className="wrapper">
                    <div className="card">
                        <div>
                            <img src="http://placehold.it/100x100" alt=""/>
                        </div>
                        <div className="content">
                            <div className="title"><h2>This is a title</h2></div>
                            <div className="description">This is some description.This is some description.This is
                                some description.This is some description.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Cards;