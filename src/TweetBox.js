import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@mui/material';
import db from './firebase';



const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: `Abu A'la`,
            username: "halloween_waste",
            verified: false,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://twirpz.wordpress.com/2015/06/01/egg-timer-the-history-of-twitters-default-profile-pic/"
        });
        setTweetMessage("");
        setTweetImage("");
    };

    return (
        <div className='tweetBox'>
            <form>
                <div className='tweetBox-input'>
                    <Avatar src="https://twirpz.wordpress.com/2015/06/01/egg-timer-the-history-of-twitters-default-profile-pic/" />
                    <input onChange={(e) => setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder="What's happening?"
                    type='text'></input>
                </div>
                <input onChange={(e) => setTweetMessage(e.target.value)}
                value={tweetImage}
                className="tweetBox-inputImage"
                placeholder="Optional: Enter image URL" type='text'></input>
                <Button 
                onClick={sendTweet}
                type="submit" 
                className="tweetBox-button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;