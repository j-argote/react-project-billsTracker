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
                var banks = result.data.map((bank, index)=>{
                    return bank
                })

                this.setState({
                    
                    // bankData: this.bankData.concat(banks)
                })

                console.log(banks)
            })  
    }

    

    render() {
        return (
            <ul>
                Bank Locations Component
                {/* {console.log()}
                {this.state.bankData.map((bank, index)=>(
                    <li key={index}>{bank.data}</li>
                ))} */}
            </ul>
        );
    }
}


BankLocations.propTypes = {
    
};

export default BankLocations
