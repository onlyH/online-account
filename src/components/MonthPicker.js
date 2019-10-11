import React, {Component} from 'react';
import propTypes from 'prop-types'
import { n } from './utility'
class MonthPicker extends Component {
    constructor(props) {
        super(props)
        this.state={
            isOpen: false
        }
    }
    getFullYears=()=>{
        let year = new Date().getFullYear();
        let preYear = year - 5;
        let nextYear = year + 5;
        let arr = []
        for(var i = preYear; i<= nextYear; i++) {
            arr.push(i)
        }
        return arr
    }
    render() {
        const {year, month } = this.props
        const { isOpen }  = this.state
        return (
            <div className="dropdown moth-picker-component">
                <h4>选择月份</h4>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={()=>this.setState({isOpen: !this.state.isOpen})}
                >
                    { `${year}年${n(month)}月 `}
                </button>
                {
                    isOpen && <div className="dropdown-menu" style={{display: 'block'}}>
                        <div className="row">
                            <div className="col border-right">
                            </div>
                            <div className="col">333</div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MonthPicker;