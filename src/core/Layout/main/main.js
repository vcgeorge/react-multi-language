import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
const Main = (props) => {
    const smallScreeneMatches = useMediaQuery('(max-width:991px)');
    return (
        <>
            <div
                style={{
                    flexGrow: 1,
                    transition: 'all 0.2s ease',
                    padding: '12px 24px',
                    marginTop: '70px',
                    marginLeft: !props.open && !smallScreeneMatches
                        ? `-${props.drawerWidth}px`
                        : 0,

                }}
                open={props.open}
            >
                {props.children}
            </div >

        </>
    )
}

export default Main
