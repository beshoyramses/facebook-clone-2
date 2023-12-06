import React from 'react';
import "./sidebar.styles.css";
import SidebarItemComponent from '../sidebar-item/sidebar-item.component';
import friend from "../../images/freinds-con.svg";
import time from "../../images/time.svg";
import save from "../../images/save.svg";
import groups from "../../images/groups.svg";
import video from "../../images/video.svg";
import marketplace from "../../images/marketplace.svg";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext/user.context';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const SidebarComponent = () => {

     const { currentUser } = useContext(UserContext);
     const photo = currentUser["photoURL"];
     const userName = currentUser["displayName"];

     console.log(photo)


    return (
        <div className='sidebar'>
           <div className="container">
           <SidebarItemComponent img={photo} text={userName}/>
           <SidebarItemComponent img={"https://cdn-icons-png.flaticon.com/128/3220/3220788.png"} text={"Find Friends lifless mf (comming soon)"}/>
           <SidebarItemComponent img={time} text={"Memories (comming soon)"}/>
           <SidebarItemComponent img={save} text={"Saves (comming soon)"}/>
           <SidebarItemComponent img={groups} text={"Groups (comming soon)"}/>
           <SidebarItemComponent img={video} text={"Videos (comming soon)"}/>
           <SidebarItemComponent img={marketplace} text={"Marketplace (comming soon)"}/>
           </div>
        </div>
    );
}

export default SidebarComponent;
