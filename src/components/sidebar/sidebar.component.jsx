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


const SidebarComponent = () => {

     const { currentUser } = useContext(UserContext);
     const photo = currentUser["photoURL"];
     const userName = currentUser["displayName"];

     console.log(photo)


    return (
        <div className='sidebar'>
           <div className="container">
           <SidebarItemComponent img={photo} text={userName}/>
           <SidebarItemComponent img={friend} text={"Find Friends"}/>
           <SidebarItemComponent img={time} text={"Memories"}/>
           <SidebarItemComponent img={save} text={"Saves"}/>
           <SidebarItemComponent img={groups} text={"Groups"}/>
           <SidebarItemComponent img={video} text={"Videos"}/>
           <SidebarItemComponent img={marketplace} text={"Marketplace"}/>
           <SidebarItemComponent img={friend} text={"Find Friends"}/>
           <SidebarItemComponent img={time} text={"Memories"}/>
           <SidebarItemComponent img={save} text={"Saves"}/>
           <SidebarItemComponent img={groups} text={"Groups"}/>
           <SidebarItemComponent img={video} text={"Videos"}/>
           </div>
        </div>
    );
}

export default SidebarComponent;
