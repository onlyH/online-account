import React, {Component} from 'react';
import PropsTypes from 'prop-types'

class Tabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeIndex: this.props.activeIndex
        }
    }
    tabChange = (event,index) => {
        event.preventDefault();
        this.setState({activeIndex: index})
        this.props.onTabChange(index)
    };
    render() {
        const { children } = this.props;
        const { activeIndex } = this.state
        return (
            <ul className="nav nav-tabs nav-fill my-4">
                {
                    React.Children.map(children, (child,index )=> {
                        const activeClassName = (activeIndex === index) ? 'nav-link active' : 'nav-link'
                        return (
                            <li className="nav-item">
                                <a
                                    onclick={event=>{this.tabChange(event,index)}}
                                    className={activeClassName}
                                    role="button"
                                >
                                    {child}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}
Tabs.propTypes = {
    activeIndex: PropsTypes.number.isRequired,
    onTabChange:PropsTypes.func.isRequired
}

export default Tabs;