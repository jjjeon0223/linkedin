import React from 'react'
import { useSelector } from 'react-redux'
import "./Sidebar.css"
import { selectUser } from './features/userSlice'
import { Avatar } from '@material-ui/core'

function Sidebar() {
    const user = useSelector(selectUser)

    const recentItem = (topic) => (
        <div className="sidebar__recentItems">
            <span className="sidebar__hash">#</span><p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhZGllbnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt=""/>
                <Avatar src={user.photoUrl} className="sidebar__avatar">
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">
                        2,338
                    </p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('developer')}
                {recentItem('business')}
                {recentItem('softwareengineering')}
            </div>
        </div>
    )
}

export default Sidebar
