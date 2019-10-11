import React from 'react';
import { LIST_VIEW, CHART_VIEW} from "./utility";
import Ionicon from "react-ionicons";
import propTypes from 'prop-types'

const generate = (current, view) => {
    return current === view ? 'nav-link active' : 'nav-link'
}
const ViewTabs = ({activeTab, onTabChange}) => (
    <ul className="nav nav-tabs nav-fill my-4">
        <li className="nav-item">
            <a
                href="javascript:;"
                className={generate(activeTab, LIST_VIEW)}
                onClick={e=> {
                    e.preventDefault();
                    onTabChange(LIST_VIEW)
                }}>
            <Ionicon
                className="rounded-circle mr-2"
                fontSize="25px"
                color={'#007bff'}
                icon="ios-paper"
            />
            列表模式</a></li>
        <li className="nav-item">
            <a
                href="javascript:;"
                className={generate(activeTab, CHART_VIEW)}
                onClick={e=>{
                    e.preventDefault()
                    onTabChange(CHART_VIEW)
                }}>
                <Ionicon
                    className="rounded-circle mr-2"
                    fontSize="30px"
                    color={'#007bff'}
                    icon="ios-pie"
                />
                图标模式</a></li>
    </ul>
);
ViewTabs.propTypes = {
    activeTab: propTypes.string.isRequired,
    onTabChange: propTypes.func.isRequired
}
export default ViewTabs;