import React, { useContext } from 'react';
import "./sidebar.styles.css";
import SidebarItemComponent from '../sidebar-item/sidebar-item.component';
import { UserContext } from '../../context/userContext/user.context';
import { ReactComponent as GroupAddIcon } from '@mui/icons-material/GroupAdd';

// Importing images
import friend from "../../images/freinds-con.svg";
import time from "../../images/time.svg";
import save from "../../images/save.svg";
import groups from "../../images/groups.svg";
import video from "../../images/video.svg";
import marketplace from "../../images/marketplace.svg";

const sidebarItems = [
    { key: '1', img: friend, text: "Find Friends (coming soon)" },
    { key: '2', img: time, text: "Memories (coming soon)" },
    { key: '3', img: save, text: "Saves (coming soon)" },
    { key: '4', img: groups, text: "Groups (coming soon)" },
    { key: '5', img: video, text: "Videos (coming soon)" },
    { key: '6', img: marketplace, text: "Marketplace (coming soon)" }
];

const SidebarComponent = () => {
    const { currentUser } = useContext(UserContext);
    const photoURL = currentUser?.photoURL;
    const displayName = currentUser?.displayName;

    return (
        <nav className='sidebar'>
            <div className="container">
                <SidebarItemComponent img={photoURL} text={displayName} />
                {sidebarItems.map(item => (
                    <SidebarItemComponent key={item.key} img={item.img} text={item.text} />
                ))}
            </div>
        </nav>
    );
}

export default SidebarComponent;

