import cx from 'classnames';
import { Component } from 'react';

function PropLikeButton (props) {
    return (
         <button className={props.classValue} onClick={props.onClick}>
            <div className="like-counter"> Like | {props.value} </div>
         </button>
    );
}

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likeCount: 100,
            isClicked: false,
        }
    };
    renderLikeButton(currentClassName, likeCount) {
        return (
            <PropLikeButton
                classValue={currentClassName}
                value={likeCount} 
                onClick={() => this.handleClick()} 
            />); 
    }
    handleClick() {
        const wasClicked = this.state.isClicked
        if (wasClicked) {
            this.setState({
                likeCount: this.state.likeCount-1,
                isClicked: false,
            });
        } else {
            this.setState({
                likeCount: this.state.likeCount+1,
                isClicked: true,
            });
        }
    };

    render() {
        const currentClassName = cx({"like-button":!this.state.isClicked}, {"liked":this.state.isClicked})
        return (
            <>
                <div>
                   {this.renderLikeButton(currentClassName, this.state.likeCount)}
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
