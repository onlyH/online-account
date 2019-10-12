// 容器组件，关心数据的运作方式，提供数据以及操作数据的方法，回调函数，有状态的，作为数据源的存在
import React, {Component, Fragment} from 'react';
import { LIST_VIEW, CHART_VIEW, TYPE_INCOME, TYPE_OUTCOME, parseToYearAndMonth, n} from "../utility";
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
        data: '2019-10-21',
        cid:1

    },
    {
        id: 2,
        title: '去云南旅行',
        price: 300,
        data: '2019-09-21',
        cid:2
    },
    {
        id: 1,
        title: '去云南旅行',
        price: 200,
        data: '2019-09-21',
        cid:1

    }
];
//创建一条新数据---low版本，写死
const newItem = {
    id: 5,
    title:'这是个新数据' + parseInt(Math.random() * 100),
    price: Math.floor(Math.random() * 300),
    cid : 1,
    data: '2019-10-10'
};
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items,
            currentDate:parseToYearAndMonth(),//当前年月
            tabView:CHART_VIEW
        }
    }
    changeView = (view) => {
        this.setState({tabView: view})
    };
    changeDate = (year,month) => {
        let currentDate = {year,month}
        this.setState({currentDate})
    };
    modifyItem = (editItem) => {
        let list = this.state.items.map(item=> {
            if(editItem === item) {
                return {...item, title: '更新后的标题'}
            } else {
                return item
            }
        })
        this.setState({items:list})
    };
    createItem = ()=> {
        console.log(1)
        this.setState({items:[newItem, ...items]})
        console.log(this.state.items)
    };
    deleteItem = (deleteItem)=> {
        // let items = this.state.items.splice(item , 1)
        let items = this.state.items.filter(item=> item !== deleteItem)
        this.setState({items})
    };
    render() {
        let { items,currentDate, tabView } = this.state
        let itemsWidthCategory = items.map(item=> {
            item.category = category[item.cid]
            return item
        }).filter(item=>item.data.includes(`${currentDate.year}-${n(currentDate.month)}`));
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
                                onChange={(year,month)=>this.changeDate(year, month)}
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
                        onTabChange={view=>this.changeView(view)}
                    />
                    {
                        tabView === LIST_VIEW
                            ? <Fragment>
                                <CreateBtn onClick={()=>this.createItem()}/>
                                <PriceList
                                    items={itemsWidthCategory}
                                    onModifyItem={item=>this.modifyItem(item)}
                                    onDeleteItem={item=>this.deleteItem(item)}
                                />
                            </Fragment>
                            : <div>图表~~</div>
                    }
                </div>
            </Fragment>
        );
    }
}

export default Home;