import Proptypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import axios from 'axios';
import DropdownList from '../components/DropdownList';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      prefix: '',
      wordArray: [],
      currentSelected: -1
    }
  }

  handleInputChange(e) {
    this.setState({prefix: e.target.value});
    if(e.target.value != '') {
      axios.get(`http://localhost:3000/api/autocompleteQuery?prefix=${e.target.value}`)
        .then(wordArray => {

          this.setState({wordArray: wordArray.data});

        })
    }

  }

  onKeyDownOnInput(e) {

    const itemLength = this.state.wordArray.length;


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
      } else if (this.state.currentSelected + 1 >= itemLength-1) {
        this.setState({currentSelected: 0});
      }

    }
    console.log("currentState", this.state.currentSelected)
  }

  onKeyPress(e) {

    if(this.state.currentSelected >=0) {
      if(e.key ==='Enter') {
        this.setState({prefix: this.state.wordArray[this.state.currentSelected]});
      }

    }
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>Autocomplete</h1>
        <div style={{width: '20%', marginLeft: '40%'}}>
          <input value={this.state.prefix} onChange={(e) => this.handleInputChange(e)} style={{border: '1px solid grey', width: '100%'}} onKeyDown = {e => this.onKeyDownOnInput(e)} onKeyPress={e => this.onKeyPress(e)}></input>
          <DropdownList items={this.state.wordArray} currentSelected={this.state.currentSelected}/>
        </div>
      </div>
    );
  }

}
const mapStateToProps = (state) => {
    return {
        name: state.rootReducer.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
