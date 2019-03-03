import React from "react";

class Post extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    render() {

        let fullTextBlock;
        if(this.state.display){
            fullTextBlock = <div className="full-text">
                {this.props.fulltext.split('\n').map(function(item, key) {
                    return (
                        <p key={key}>{item}</p>
                    )
                })}
            </div>
        }

        return (
            <div className="container">
                <div className="row ">
                    <div className="col-md-6">
                        <h3 className="display-4">{this.props.title}</h3>
                        <div>
                            {this.props.text.split('\n').map(function(item, key) {
                                return (
                                    <p key={key}>{item}</p>
                                )
                            })}
                        </div>
                        <span className="show-more" onClick={() => {
                            this.setState({display: !this.state.display});
                        }}>Display full article</span>
                        {fullTextBlock}
                        <div className="row">
                            <div className="col-md-6 font-italic font-weight-lighter"><span>{this.props.author}</span></div>
                            <div className="col-md-6 pr-4 font-weight-lighter"><span className="float-right">{this.props.created}</span></div>
                        </div>
                        <hr className="style4"/>
                    </div>
                    <div className="col-md-6 pt-2">
                        <img src={this.props.image}/>
                    </div>
                </div>
            </div>

        );
    }
}

export default Post;