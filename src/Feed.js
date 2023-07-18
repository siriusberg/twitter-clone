import React, {useEffect, useState} from 'react';
import './Feed.css';
import TweetBox from './TweetBox';
import Post from './Post';
import db from './firebase';
import FlipMove from 'react-flip-move';

const Feed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        try {
          db.collection('posts').onSnapshot(snapshot => {
            console.log(snapshot.docs.map(doc => doc.data()));
            setPosts(snapshot.docs.map(doc => doc.data()));
          });
        } catch (error) {
          console.error(error);
          // Handle the error or display a fallback UI
        }
      }, []);
      
    return (
        <div className='feed'>
       
            <div className='feed-header'>
                <h2>Home</h2>
            </div>
           
            <TweetBox />
            <FlipMove>
            {posts.map((post) => (
                <Post 
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                avatar={post.avatar}
                image={post.image} />
            ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed;