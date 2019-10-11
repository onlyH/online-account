import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import PriceList from './components/PriceList'
import ViewTabs from './components/ViewTabs'
import MonthPicker from './components/MonthPicker'
import { LIST_VIEW, CHART_VIEW} from "./components/utility";

const items = [
  {
    id: 1,
    title: '去云南旅行',
    price: 200,
    data: '2010-01-21',
    category: {
      id: 1,
      name: '旅行',
      type: 'outcome',
      iconName: 'ios-plane'
    }
  },
  {
    id: 2,
    title: '去云南旅行',
    price: 300,
    data: '2010-01-21',
    category: {
      id: 2,
      name: '旅行2',
      type: 'outcome',
      iconName: 'ios-plane'
    }
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <PriceList
          items={items}
          onModifyItem={item=>{alert(item.id)}}
          onDeleteItem={item=>{alert('delete')}}
      />
      <ViewTabs
          activeTab={LIST_VIEW}
          onTabChange={view=>{console.log(view)}}
      />
      <MonthPicker
          year={2019}
          month={9}
      />
    </div>
  );
}

export default App;
