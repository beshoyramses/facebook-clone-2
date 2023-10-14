import React from 'react';
import "./sidebar-item.styles.css";
const SidebarItemComponent = (props) => {
    const {img, text} = props;

    return (
        <div className='sidebar-item'>
            <img src={img} alt="username" />
            <span>{text}</span>
        </div>
    );
}

export default SidebarItemComponent;
