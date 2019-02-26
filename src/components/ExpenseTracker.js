import React from 'react';
import PropTypes from 'prop-types';

//pie chart
import ReactChartkick,{PieChart} from 'react-chartkick'
import Chart from 'chart.js'
ReactChartkick.addAdapter(Chart)

class ExpenseTracker extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
                <PieChart data={[["Blueberry", 44], ["Strawberry", 23], ["Banana", 33]]} />

            </div>
        );
    }
}


ExpenseTracker.propTypes = {
    
};

export default ExpenseTracker
