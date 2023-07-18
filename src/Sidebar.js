import React from 'react';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* Twitter Icon */}
            <TwitterIcon className='sidebar-twitterIcon'/>
            {/* Sidebar Option */}
            <SidebarOption className="home" active Icon={HomeIcon} text="Home" />
            <SidebarOption className="explore" Icon={SearchIcon} text="Explore" />
            <SidebarOption className="notifications" Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption className="mail" Icon={MailOutlineIcon} text="Mail" />
            <SidebarOption className="bookmarks" Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption className="lists" Icon={ListAltIcon} text="Lists" />
            <SidebarOption className="profile" Icon={PermIdentityIcon} text="Profile" />
            <SidebarOption className="more" Icon={MoreHorizIcon} text="More" />

            {/*Button */}
            <Button variant='outlined' className='sidebar-tweet' fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;