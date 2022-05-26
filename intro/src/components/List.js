import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'

function List(props) {
    const[list, setList] = useState();
    let outputList;

    useEffect(() => {
        function loadingList() {
        fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
          .then(res => res.json())
          .then(
            (result) => {
              setList(result);
            },
            (error) => {
              setList(error);
            }
          )
      }
        return function cleanup() {
          loadingList()
        };
      }, []);

    function openDetails(id, name, e){
    props.openDetails(id, name);
    }

    if (typeof list === 'object') {
        outputList = list.map((item) =>
          <li key={item.id} className='list-name' onClick={(e) => openDetails(item.id, item.name, e)}>
            {item.name}
          </li>);
      }  

    return (
      <ul className='list'>
        {outputList}
        <li className='list-name'>...</li>
      </ul>
    );
  }
  
  export default List;
  