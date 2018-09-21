
console.log("Entering counter-example.js");
class Counter extends React.Component {
 
  constructor( props ) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: props.count,
      name: 'Initial'
    }
  }

  handleAddOne() {
    this.setState( (prevState) => { 
      return {
        count: prevState.count + 1,
        name: 'AddOne'
      }; 
    });

  }
  handleMinusOne() {
    this.setState( (prevState) => {
      return {
        count: prevState.count - 1,
        name: 'MinusOne'
      };
    })

  }

  handleReset() {
   this.setState( (prevState) => {
     return {
       count: 0,
        name: 'reset'
     };
   })
  }

  render() {
    return (
      <div>
        {this.state.name}
        <h1> Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>        
        < button onClick = { this.handleReset }>reset</button>
      </div>
    )
  }
}

  Counter.defaultProps = {
    count: 100,
  };

ReactDOM.render(<Counter count={-10}/>, document.getElementById('app'));

console.log("Leaving counter-example.js");

// class Counter extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleAddOne = this.handleAddOne.bind(this);
//     this.handleMinusOne = this.handleMinusOne.bind(this);
//     this.handleReset = this.handleReset.bind(this);
//   }
//   handleAddOne() {
//     console.log('handleAddOne');
//   }
//   handleMinusOne() {
//     console.log('handleMinusOne');
//   }
//   handleReset() {
//     console.log('handleReset');
//   }
//   render() {
//     return (
//       <div>
//         <h1>Count: </h1>
//         <button onClick={this.handleAddOne}>+1</button>
//         <button onClick={this.handleMinusOne}>-1</button>
//         <button onClick={this.handleReset}>reset</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Counter />, document.getElementById('app'));

// // let count = 0;
// // const addOne = () => {
// //   count++;
// //   renderCounterApp();
// // };
// // const minusOne = () => {
// //   count--;
// //   renderCounterApp();
// // };
// // const reset = () => {
// //   count = 0;
// //   renderCounterApp();
// // };

// // const appRoot = document.getElementById('app');

// // const renderCounterApp = () => {
// //   const templateTwo = (
// //     <div>
// //       <h1>Count: {count}</h1>
// //       <button onClick={addOne}>+1</button>
// //       <button onClick={minusOne}>-1</button>
// //       <button onClick={reset}>reset</button>
// //     </div>
// //   );

// //   ReactDOM.render(templateTwo, appRoot);
// // };

// // renderCounterApp();
