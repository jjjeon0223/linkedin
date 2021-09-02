import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon  from '@material-ui/icons/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="wdigets__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="wdigets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>

            {newsArticle("React most handpicked language by Frontend Developers", "Top news - 9000 readers")}
            {newsArticle("COVID update", "Tope news - 900 readers")}
            {newsArticle("Tesla hits new high", "Cars & auto - 900 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 900 readers")}
            {newsArticle("Redux - is it good?", "Code  - 900 readers")}
            {newsArticle("WooJae Jeon picked for forbes 30 under 30", "Tope news - 900 readers")}

        </div>
    )
}

export default Widgets
