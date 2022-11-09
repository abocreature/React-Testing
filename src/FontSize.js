import React, {Component} from 'react';

class FontSize extends Component {

    constructor(props) {
        super();
        this.state = {
            size: 25
        }
        this.incrementSizeUp = this.incrementSizeUp.bind(this);
        this.incrementSizeDown = this.incrementSizeDown.bind(this);
    }

    incrementSizeUp() {
        this.setState(state => ({
            size: state.size + 1
        }));
    }

    incrementSizeDown() {
        this.setState(state => ({
            size: state.size - 1
        }));
    }

    render() {
        let style = {
            fontSize: this.state.size + "px"
        };

        return (
            <div>
                <p style = {style}>This paragraph has a font-size of {this.state.size}px</p>
                <button onClick={this.incrementSizeUp} className="btn btn-danger">Size Up</button>
                <button onClick={this.incrementSizeDown} className="btn btn-danger">Size Down</button>
            </div>
        );
    }
}

export default FontSize;