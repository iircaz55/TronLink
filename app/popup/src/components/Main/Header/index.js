import React, { Component } from 'react';
import './Header.css';

import AccountView from './AccountView';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <AccountView />
            </div>
        );
    }
}

export default Header;