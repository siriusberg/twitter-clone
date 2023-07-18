import React from 'react';
import './Widgets.css';
import {TwitterTimelineEmbed,
        TwitterShareButton,
        TwitterTweetEmbed,
         } from 'react-twitter-embed';
import SearchIcon from '@mui/icons-material/Search';

const Widgets = () => {
    return (
        <div className='widgets'>
            <div className='widgets-input'>
                <SearchIcon className='widget-search' />
                <input placeholder='Search Twitter' type='text' />
            </div>
            <div className='widgets-container'>
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId='1681292019845541890' />
                <TwitterTimelineEmbed
                sourceType='profile' screenName='halloween_waste'
                options={{height : 400}} />
                <TwitterShareButton 
                url={'https://github.com/siriusberg'}
                options={{text:"Twitter clone with ReactJS",
                via:"halloween_waste"}} />
            </div>
        </div>
    )
}

export default Widgets;