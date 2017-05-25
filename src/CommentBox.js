import React, { Component } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentBox extends Component {

    constructor() {
        super();

        this.state = {
            showComments: true,
            comments: [
                {id: 1, author: 'Bugs Bunny', body: 'What\'s up Doc'},
                {id: 2, author: 'Pepe le Pew', body: 'Ooh look what we have here?'},
                {id: 3, author: 'Donald Duck', body: 'Don\'t eat my feet'}
            ]
        };
    }

    _delete (id) {
        this.setState({
            comments: this.state.comments.filter(function(comment) {
                return comment.id !== id;
            })
        });
    }

    _getComments() {

        return this.state.comments.map(function(comment) {
            return (
                <Comment
                    author={comment.author}
                    body={comment.body}
                    key={comment.id}
                    delete={this._delete.bind(this)}
                    id={comment.id}
                />
            );
        }.bind(this));
    }

    _getCommentsTitle(commentCount) {
        if (commentCount === 0) {
            return 'No comments yet';
        } else if (commentCount === 1) {
            return '1 comment';
        } else {
            return `${commentCount} comments`;
        }
    }

    _handleClick() {
        this.setState({
            showComments: !this.state.showComments
        });
    }

    _addComment(author, body) {
        const comment = {
            id: this.state.comments.length,
            author,
            body
        };
        this.setState({
            comments: this.state.comments.concat([comment])
        });
    }

    render() {
        const comments = this._getComments();
        let commentNodes; //undefined
        let buttonText = "Show comments";

        if (this.state.showComments) {
            commentNodes = (
                <div className="comment-list">
                    {comments}
                </div>
            );
            buttonText = "Hide comments";
        }
        return (
            <div className="row comments-container">
                <CommentForm addComment={this._addComment.bind(this)} />
                <h4 className="comment-count">
                    {this._getCommentsTitle(comments.length)}
                </h4>
                <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
                {commentNodes}
            </div>
        );
    }
}

export default CommentBox;
