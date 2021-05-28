import React, {Component} from 'react';

class List extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list : [
        {name:'홍길동', age:30, id:1},
        {name:'김철수', age:44, id:2},
        {name:'김영희', age:22, id:4},
        {name:'홍길동', age:30, id:3}
      ]
    };
  }
  render(){
    const itemList = this.state.list.map((item, index)=>{
      return (<li key={item.age}>{item.name} : {item.age}</li>);
    });
    console.log(itemList);
    return (
      <ul>{itemList}</ul>
    );
  }
}

export default List;