import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
        this.expand = this.expand.bind(this);
    }

    expand() {
        this.setState({ expanded: !this.state.expanded });

    }

    render() {
        const { item } = this.props;
        return (
            <section id="cards">
                <div className="wrapper">
                    <div className="card">
                        <div>
                            <img src={item.image} alt="Image" />
                        </div>
                        <div className="content">
                            <div className="title"><h2> {item.title} </h2></div>
                        </div>
                    </div>
                    <div className="card">
                        <button onClick={this.expand}>Show more</button>
                        {
                            this.state.expanded
                                ? <div className="description"><p className="urdu">{item.contentSnippet.trim()}</p></div>
                                : null
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Card;
