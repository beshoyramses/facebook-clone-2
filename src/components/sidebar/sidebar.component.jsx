import React from 'react';
import "./sidebar.styles.css";
import SidebarItemComponent from '../sidebar-item/sidebar-item.component';
import friend from "../../images/freinds-con.svg";
import time from "../../images/time.svg";
import save from "../../images/save.svg";
import groups from "../../images/groups.svg";
import video from "../../images/video.svg";
import marketplace from "../../images/marketplace.svg";
const SidebarComponent = () => {

    return (
        <div className='sidebar'>
           <div className="container">
           <SidebarItemComponent img="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-1/148693320_545419296387552_5544798022985132643_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=r7kLrKf-gMkAX8zBjVj&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDcIQ5ZEO5lHjTfFlCJDwKgYT7rGPu42TAIZTLe1ufJLQ&oe=6552102A" text="Beshoy ramses"/>
           <SidebarItemComponent img={friend} text={"Find Friends"}/>
           <SidebarItemComponent img={time} text={"Memories"}/>
           <SidebarItemComponent img={save} text={"Saves"}/>
           <SidebarItemComponent img={groups} text={"Groups"}/>
           <SidebarItemComponent img={video} text={"Videos"}/>
           <SidebarItemComponent img={marketplace} text={"Marketplace"}/>
           <SidebarItemComponent img="https://scontent.fcai19-2.fna.fbcdn.net/v/t1.6435-1/148693320_545419296387552_5544798022985132643_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=r7kLrKf-gMkAX8zBjVj&_nc_ht=scontent.fcai19-2.fna&oh=00_AfDcIQ5ZEO5lHjTfFlCJDwKgYT7rGPu42TAIZTLe1ufJLQ&oe=6552102A" text="Beshoy ramses"/>
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
