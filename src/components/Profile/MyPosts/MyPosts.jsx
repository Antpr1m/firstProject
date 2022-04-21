import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let postText = React.createRef();
    let addPost = () => {
        let text = postText.current.value;
        props.addPost(text);
    }

    return (
        <div className={s.body}>
            <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref={postText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;
