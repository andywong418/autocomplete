import React from 'react';
import DropdownItem from './DropdownItem';

class DropdownList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSelected: -1
    }
  }

  onKeyDownOnInput(e) {
    console.log("IN?");
    const itemLength = this.props.items.length;


    if(e.key === 'ArrowUp') {
      //up
      if(this.state.currentSelected - 1 >=0) {
        this.setState({currentSelected: this.state.currentSelected - 1});
      } else if (this.state.currentSelected -1 < 0) {
        this.setState({currentSelected: itemLength - 1});
      }

    } else if(e.key === 'ArrowDown') {
      //down
      if(this.state.currentSelected + 1 <= itemLength) {
        this.setState({currentSelected: this.state.currentSelected + 1})
      } else if (this.state.currentSelected + 1 > itemLength) {
        this.setState({currentSelected: 0});
      }

    }
  }

  render() {
    if(this.props.items.length > 0) {
      return (
        <div className="dropdownContent" style={{marginTop: '-17px'}}>
          <ul style={{tabIndex: '0', padding: 0, border: '1px solid grey'}}>
          {this.props.items.map((item, index) => {
            return <DropdownItem key={index} currentSelected={this.props.currentSelected} string={item} index={index}/>
          })}
          </ul>
        </div>
      )
    }
    return(<div></div>);
  }
}


export default DropdownList;
