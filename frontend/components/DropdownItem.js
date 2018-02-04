import React from 'react';


const DropdownItem = ({currentSelected, string, index}) => {
    const css = {
      listStyle: 'none',
      textAlign: 'left'
    }
    if(currentSelected === index) {
      css.background = 'lightblue';
      css.color = 'white'
    }


    return (
      <li className="items" style={css}>{string} </li>
    )

}

export default DropdownItem;
