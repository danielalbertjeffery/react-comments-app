import React, { Component } from 'react';

class Comment extends Component {

    _deleteComment (id) {
        this.props.delete(id)
    }

    render() {
        return (
            <div className="comment">
                <p className="comment-header">
                    {this.props.author}
                </p>
                <p className="comment-body">
                    {this.props.body}
                </p>
                <div>
                    <a href="#" className="comment-footer-delete" onClick={this._deleteComment.bind(this, this.props.id)}>
                        Delete comment
                    </a>
                </div>
            </div>
        );
    }
}

export default Comment;
