import React, { forwardRef } from 'react';
import './Post.css';
import {Avatar} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

const Post = forwardRef(({displayName, 
    username, verified, text, image, avatar}, ref) => {
    return (
        <div className='post' ref={ref}>
            <div className='post-avatar'>
                <Avatar src={avatar} />
            </div>
            <div className='post-body'>
                <div className='post-header'>
                    <div className='post-headerText'>
                        <h3>
                            {displayName} <span>
                                {verified && <VerifiedIcon className='post-badge' fontSize='very small'/>}
                            </span>
                            <span className='username'>@{username}</span>
                        </h3>
                    </div>
                    <div className='post-headerDescription'>
                        <p>{text}</p>
                    </div>
                    <img src={image}
                    alt=""></img>
                    <div className='post-footer'>
                        <ChatBubbleOutlineIcon fontSize='small' />
                        <RepeatIcon fontSize='small' />
                        <FavoriteBorderIcon fontSize='small' />
                        <PublishIcon fontSize='small' />
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Post;