import React from 'react';
import './index.css';


class Dropdown extends React.Component {
    constructor(){
    super();

    this.state = {
        displayMenu: false,
        timezone:''
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
        document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
        document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown" style = {{width:"100%"}} >
            <div className="button" onClick={this.showDropdownMenu}> Click here to input Time Zone </div>

            { this.state.displayMenu ? (
            <ul>
                <li>UTC -12:00 International Date Line West</li>
                <li>UTC -11:00 Midway Islands, Samoa, Niue, Pago Pago </li>
                <li>UTC -10:00 Fakaofo, Hawaii, Rarotonga, Tahiti</li>
                <li>UTC -9:50 Marquesas</li>
                <li>UTC -9:00 Alaska, Gambier</li>
                <li>UTC -8:00 Pacific Time Los Angeles, San Fransico, Seattle, Vancouver</li>
                <li>UTC -7:00 Mountain Time Arizona</li>
                <li>UTC -6:00 Central Time New Orleans, Chicago, Central America, Mexico City</li>
                <li>UTC -5:00 Eastern Time Toronto, Florida, New York, Havanna, Lima, Quito</li>
                <li>UTC -4:50 Caracas</li>
                <li>UTC -4:00 Atlantic Time Antiqua, Aruba, Barbados, Bermuda, Santo Domingo, Tortola</li>
                <li>UTC -4:00 Atlantic Time Antiqua, Aruba, Barbados, Bermuda, Santo Domingo, Tortola</li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            ):
            (
            null
            )
            }

        </div>

        );
    }
}

export default Dropdown;