import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { UtdLogo } from '../icons';

class Header extends Component {
    render() {
        return (
            <AppBar
                position="fixed"
                style={{
                    backgroundColor:'#b80102',
                    boxShadow: 'none',
                    padding:'10px 0',
                    borderBottom: '2px solid #00285e'
                }}
            >
                <Toolbar style={{display:'flex'}}>
                    <div style={{flexGrow: 1}}>
                        <div className="header_logo">
                            <UtdLogo
                                link={true}
                                linkTo="/"
                                width="70px"
                                height="70px"
                            />
                        </div>  
                    </div>
                    
                    {/* Team Button */}
                    <Link to="/the_team">
                        <Button color="inherit">The team</Button>
                    </Link>

                    {/* Matches Button */}
                    <Link to="/the_matches">
                        <Button color="inherit">Matches</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        );
    }
}

export default Header;