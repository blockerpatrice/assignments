import React from 'react';
import Select from 'react-select';
import './index.css';
import {data} from './Provider'

const timeZoneArry = [
    {label: 'UTC -12:00 International Date Line West', value: -12},
    {label: 'UTC -11:00 Midway Islands, Samoa, Niue, Pago Pago', value: -11},
    {label: 'UTC -10:00 Fakaofo, Hawaii, Rarotonga, Tahiti', value:-10},
    {label: 'UTC -9:30 Marquesas', value: -9.5},
    {label: 'UTC -9:00 Alaska, Gambier', value:-9},
    {label: 'UTC -8:00 Pacific Time Los Angeles, San Fransico, Seattle, Vancouver', value:-8},
    {label: 'UTC -7:00 Mountain Time Arizona', value: -7},
    {label: 'UTC -6:00 Central Time New Orleans, Chicago, Central America, Mexico City', value:-6},
    {label: 'UTC -5:00 Eastern Time Toronto, Florida, New York, Havanna, Lima, Quito', value:-5},
    {label: 'UTC -4:30 Caracas', value:-4.5},
    {label: 'UTC -4:00 Atlantic Time Antiqua, Aruba, Barbados, Bermuda, Santo Domingo, Tortola', value:-4},
    {label: 'UTC -3:00 Rio de Janeiro, Buenos Aires, Newfoundland, Montevideo, Sao Paulo', value:-3},
    {label: 'UTC -2:00 Mid-Atlantic Noronha, South Georgia', value:-2 },
    {label: 'UTC -1:00 Azores, Cape Verde', value:-1},
    {label: 'UTC 0:00  London, Lisbon, Dublin, Canary Islands, Casablanca, Reykjavik', value:0},
    {label: 'UTC +1:00 Central European Time Amsterdam, Zurich, Rome, Paris, Barcelona, Monaco', value:1},
    {label: 'UTC +2:00 Athens, Istanbul, Cairo, Cape Town', value:2},
    {label: 'UTC +3:00 Bagdad, Bahrain, Kuwait, Moscow', value:3},
    {label: 'UTC +4:00 Abu Dhabi, Muscat, Baku, Yerevan, Seychelles',value:4},
    {label: 'UTC +5:00 Karachi, Islamabad, Ekateringburg, Maldives',value:5},
    {label: 'UTC +5:30 India Standard Time Colombo',value:5.5},
    {label: 'UTC +6:00 Astana, Dhaka', value:6},
    {label: 'UTC +7:00 Bangkok, Hanoi, Jakarta, Krasnoyarsk, Bali', value:7},
    {label: 'UTC +8:00 Western Time Beijing, Hong Kong, Kuala Lumpur, Singapore, Perth, Taipei, Manila', value:8},
    {label: 'UTC +9:00 Osaka, Tokyo, Seoul, Sapporo, Yakutsk', value:9},
    {label: 'UTC +9:30 Central Time Darwin, Adelaide', value:9.5},
    {label: 'UTC +10:00 Eastern Time Sydney, Melbourne, Canberra, Brisbane, Cairns, Guam, Port Moresby', value:10},
    {label: 'UTC +11:00 Magadan, Solomon Is., New Caledonia',value:11},
    {label: 'UTC +12:00 Auckland, Wellington, Fiji, Marshall Island', value:12},
    {label: 'UTC +13:00 Nukualofa', value:13} 
];


class Dropdown extends React.Component {
    state = {
        timezone: '',
    }
    handleChange = (timezone) => {
        this.props.saveTimezone(timezone.value);
    }


    render() {
    //const { timezone } = this.state;
        return (
            <div>
                <Select options={timeZoneArry} onChange={this.handleChange} />
            </div>
            );
    }
}

export default data(Dropdown);
