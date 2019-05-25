import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Child from './Input';
import './App.css';

const num = 0;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
            username: "",
            sex: "",
            value: 0,
            start: true,
            pause: false,
            control: false,
            scrollTop: 0,
            selectedIndex: 0
        }
        this.index = 0;
        this.time = null;
        this.num = 0;
    }
    handleVal(value){
        console.log(value,'val')
       // this.username = value.target.value;
       this.setState({username: value.target.value || ""});
    }
    handleSelect(value) {
       this.setState({sex: value.target.value || ""});
        console.log(value.target.value,'select')
    }

    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        this.timer();
        let element = document.getElementById('box');
        element.style.translate ='translateX(-' + 290 + 'px)';
        let tags = [100, 50,50];
        let arr=[], arr1 = [], arr2=[], arr3=[];
        tags.forEach((item, index) => {
            console.log((Math.ceil(tags) * 0.7) - 1)
            if(index <= Math.ceil(tags.length * 0.2) - 1) {
                arr1.push(item);
            }else if(index <= Math.ceil(tags.length * 0.7) - 1) {
                arr2.push(item)
            }else {
                arr3.push(item)
            }
        })
        arr=[arr1, arr2, arr3];
        console.log(arr,'arr')

    }

    handlOver() {
        this.setState({
            control: true
        })
    }
    handleLeave() {
        this.setState({
            control: false
        })
    }

    handleScroll() {
        const ele = document.getElementById("box");
        let scrollTop = ele.scrollTop
    }

    handleClick(item, index) {
        this.setState({
            selectedIndex: index
        })
    }

    timer() {
        this.time = setInterval(()=> {
            if(this.state.control) {
                return;
            }
            let {selectedIndex } = this.state;
            this.setState({
                selectedIndex: selectedIndex + 1
            })
        }, 1000)
    }

    handlePosition() {
        let {selectedIndex, scrollTop} = this.state;
        if(selectedIndex % 5 == 0 ) {
            let element = document.getElementById('box');
            element.style.top = '-160px';
        }
    }

    componentDidUpdate(prevprops, prevState) {
        if(prevState.selectedIndex != this.state.selectedIndex) {
            this.handlePosition()
        }
    }
   
    render() {
        const { control, selectedIndex, scrollTop } = this.state;
        console.log(scrollTop, 'scroll')

        return (
    
            <div className="listContaier" style={{overFlow: control ? "scroll" : "hidden"}} 
                    id="box"
                    onScroll={this.handleScroll.bind(this)}
                >
                {
                    this.props.data.map((item,index) => {
                        return <div key={item.id} 
                            className="item"
                            style={{background: selectedIndex === index ? "red": "green"}}
                            onMouseOver={this.handlOver.bind(this)}
                            onMouseLeave={this.handleLeave.bind(this)}
                            onClick={this.handleClick.bind(this, item , index)}
                        >{item.text}</div>
                    })
                }
            </div>

        );
    }
}

App.defaultProps = {
    data: [
        {
            id: 1,
            text: 'wenben1'
        },{
            id: 2,
            text: 'wenben2'
        },{
            id: 3,
            text: 'wenben3'
        },{
            id: 4,
            text: 'wenben4'
        },{
            id: 5,
            text: 'wenben5'
        },{
            id: 6,
            text: 'wenben6'
        },{
            id: 7,
            text: 'wenben7'
        },{
            id: 8,
            text: 'wenben8'
        },{
            id: 9,
            text: 'wenben9'
        }
    ],
    words:[
        {
            tag: "wenzi1",
            hitCount: 4
        }, {
            tag: "wenz2",
            hitCount: 2
        }, {
            tag: "wenzi3",
            hitCount: 2
        }
    ]
}

export default App;