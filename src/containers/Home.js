// 容器组件，关心数据的运作方式，提供数据以及操作数据的方法，回调函数，有状态的，作为数据源的存在
import React, {Component, Fragment} from 'react';
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth} from "../utility";
import PriceList from "../components/PriceList";
import ViewTabs from "../components/ViewTabs";
import MonthPicker from "../components/MonthPicker";
import CreateBtn from "../components/CreateBtn";
import TotalPrice from "../components/TotalPrice";
const category = {
    1: {
        id: 1,
        name: '旅行',
        type: 'outcome',
        iconName: 'ios-plane'
    },
    2: {
        id: 2,
        name: '旅行2',
        type: 'income',
        iconName: 'ios-plane'
    }
}
const items = [
    {
        id: 1,
        title: '去云南旅行',
        price: 200,
        data: '2010-01-21',
        cid:1

    },
    {
        id: 2,
        title: '去云南旅行',
        price: 300,
        data: '2010-01-21',
        cid:2
    },
    {
        id: 1,
        title: '去云南旅行',
        price: 200,
        data: '2010-01-21',
        cid:1

    }
]
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate:parseToYearAndMonth(),//当前年月
            tabView:CHART_VIEW
        }
    }
    render() {
        let { items,currentDate, tabView } = this.state
        let itemsWidthCategory = items.map(item=> {
            item.category = category[item.cid]
            return item
        });
        let inCome = 0, outCome = 0;
        itemsWidthCategory.map(item=> {
            if (item.category.type === TYPE_OUTCOME) {
                outCome += item.price
            } else {
                inCome += item.price
            }
        })
        return (
            <Fragment>
                <div className="App-header">
                    <div className="row ">
                        <div className="col">
                            <MonthPicker
                                year={currentDate.year}
                                month={currentDate.month}
                                onChange={(year,month)=>console.log(year,month)}
                            />
                        </div>
                        <div className="col">
                            <TotalPrice
                                income={inCome}
                                outcome={outCome}
                            />
                        </div>
                    </div>
                </div>
                <div className="content-area py-3 px-3">
                    <ViewTabs
                        activeTab={tabView}
                        onTabChange={view=>{console.log(view)}}
                    />
                    <CreateBtn onClick={()=>{}}/>
                    <PriceList
                        items={itemsWidthCategory}
                        onModifyItem={item=>{alert(item.id)}}
                        onDeleteItem={item=>{alert('delete')}}
                    />
                </div>
            </Fragment>
        );
    }
}

export default Home;