import React, {Component} from 'react';
import PropTypes from 'prop-types'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recherts'
import {Colors} from "../utility";

const ColorsArray = Object.keys(Colors).map(key=>Colors[key])
const CustomPieChart = ({title,categoryData}) => {
    if (categoryData.length === 0) {
        return <h3 style={{textAlign: 'center'}} className="mx-3">还没有任何数据</h3>
    }
    return (
        <div className="pie-chart-component">
            <h3 style={{textAlign:'center'}} className="mt-3">{title}</h3>
            <ResponsiveContainer width={'100%'} height={300}>
                <PieChart>
                    <Pie
                        isAnimationActive={true}
                        data={categoryData}
                        dataKey="value"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill={Colors.blue}
                        label
                    >
                        {
                            categoryData.map((entry,index)=><Cell key={index} fill={ColorsArray[index % ColorsArray.length]}/>)
                        }
                    </Pie>
                    <Tooltip/>
                </PieChart>
            </ResponsiveContainer>

        </div>
    )
};
CustomPieChart.prototype = {
    title: PropTypes.string,
    categoryData:PropTypes.array
}
export default CustomPieChart;