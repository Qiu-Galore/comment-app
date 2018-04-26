import React, {Component} from 'react'

class Comment extends Component {
    render(){
        return (
            <div className='commit'>
                <div className='commit-user'>
                    <span>{this.props.comment.username}</span>:
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}
export default Comment