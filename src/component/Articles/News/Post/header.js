import React from 'react'
import TeamInfo from '../../Elements/teamInfo'
import style from '../../articles.css'


const Header = (props) =>{

    const teamInfo = (teamData) =>{
        return teamData?(
         <TeamInfo team={teamData}/>  
        )
        :null
    }

    const postData = (date,author) =>{
        return (
            <div className={style.postData}>
                <div>
                    Date:
                    <span>
                        {date}
                    </span>
                </div>

                <div>
                    Author:
                    <span>
                        {author}
                    </span>
                </div>
            </div>
        )
    }

    return(
        <div>
            {teamInfo(props.teamData)}
            {postData(props.date,props.author)}
        </div>
    )
}

export default Header