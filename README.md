#### 图标 `yarn add react-ionicons@2.1.6`
#### 检测属性 `PropTypes`
#### 默认值 `defaultProps`

>> 静态组件-月份选择-需求分析
1. 按钮显示传入的年月，点击按钮可以打开和关闭下拉菜单
2. 显示前后4年，12个月
3. 传入的年和月 打开菜单以后应该高亮
4. 点击不同的年可以切换，点击月份应该触发回调
> 分解
1. 创建一个按钮，显示传入的年份和月份
2. 创建下拉菜单，点击按钮可以显示，再点击隐藏
3. 在下拉菜单中，显示两列，分别为年和月的信息
4. 给这两个添加对应的选择高亮
5. 添加点击年份和月份的交互

>> 容器组件:
- 关心数据的运作方式，提供数据以及操作数据的方法，回调函数，有状态的，作为数据源的存在.

```javascript
//修改数组中的某项属性的value，原理object.assign()
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
//函数式调用
let itemsWidthCategory = items.map(item=> {
            item.category = category[item.cid]
            return item
        }).filter(item=>item.data.includes(`${currentDate.year}-${n(currentDate.month)}`));
//过滤列表

```


>> 测试 jest
>> react官方测试工具- reactTestUtils
>> Airbnb基于官网的封装-Enzyme
>> Enzyme优点：简单，易懂，类似于jquery链式写法