import React from 'react' 
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'


const SideNaviagtion = (props) =>{
    return(
        <div>
            <SideNav
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{
                background: '#330033',
                maxWidth: '220px'
            }}
            >

                <SideNavItems/>

            </SideNav>
        </div>
    )

}

export default SideNaviagtion