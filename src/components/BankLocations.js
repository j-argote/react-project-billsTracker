import React from 'react';
import PropTypes from 'prop-types';

class BankLocations extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            bankData: []
        }
        
    }

    componentDidMount(){
        fetch("https://banks.data.fdic.gov/api/locations?filters=CITY%3AHouston%20AND%20COUNTY%3AHarris&fields=NAME%2CSERVTYPE%2CCITY%2CSTNAME%2CADDRESS%2CZIP%2CCOUNTY&sort_by=NAME&limit=100&offset=0&format=json&download=false&filename=data_file")
            .then(res => res.json())
            .then((result)=>{
                this.setState({
                    bankData: result.data
                })
            })
    }

    render() {
        const bankInfo = this.state.bankData.map((bank, index)=>{
            return <li key={index}>{bank.data.NAME}</li>
        })
        return (
            <ul>
                Bank Locations Component
                {bankInfo}
            </ul>
        );
    }
}


BankLocations.propTypes = {
    
};

export default BankLocations
