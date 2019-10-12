import React, {Component} from 'react';

class TotalPrice extends Component {
    render() {
        const {income, outcome} = this.props
        return (
            <div className="row">
                <div className="col">收入{income}</div>
                <div className="col">支出{outcome}</div>
                
            </div>
        );
    }
}

export default TotalPrice;