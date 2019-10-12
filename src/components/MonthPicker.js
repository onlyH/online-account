import React, {Component} from 'react';
import propTypes from 'prop-types'
import { n, range } from '../utility'
class MonthPicker extends Component {
    constructor(props) {
        super(props)
        this.state={
            isOpen: false,
            selectYear: this.props.year
        }
    }
    componentDidMount() {
        document.addEventListener('click',this.handleClick, false)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick, false)
    }

    // handleClick=(e)=> {
    //     if (this.node.contains(e.target)) {
    //         return;
    //     }
    //     this.setState({
    //         isOpen: false,
    //     })
    // };
    toggleDown(e) {
        e.preventDefault();
        this.setState({isOpen: !this.state.isOpen})
    }
    selectYearNum(e, item) {
        e.preventDefault();
        this.setState({selectYear:item})
    }
    selectMonthNum(e,item) {
        this.setState({isOpen: false})
        this.props.onChange(this.state.selectYear, item)
    }
    render() {
        let months = range(12,1)
        let years = range(9, -4).map(item=>item + this.props.year)
        const {year, month } = this.props
        const { isOpen, selectYear }  = this.state
        return (
            <div className="dropdown moth-picker-component">
                <h4>选择月份</h4>
                <button
                    className="btn btn-lg btn-secondary dropdown-toggle"
                    onClick={(e)=>this.toggleDown(e)}
                >
                    { `${year}年${n(month)}月 `}
                </button>
                {
                    isOpen && <div className="dropdown-menu" style={{display: 'block'}}>
                        <div className="row">
                            <div className="col border-right">
                                {
                                    years.map((item,index)=>(

                                        <li
                                            className={item === selectYear ? 'dropdown-item active text-white' : 'dropdown-item'}
                                            key={index}
                                            onClick={e=>this.selectYearNum(e,item)}
                                        >{item}</li>
                                    ))
                                }
                            </div>
                            <div className="col">
                                {
                                    months.map((item,index) => (
                                        <li
                                            key={index}
                                            onClick={e=>this.selectMonthNum(e,item)}
                                            className={item === month ? 'dropdown-item active text-white' : 'dropdown-item'}
                                        >{n(item)}</li>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default MonthPicker;