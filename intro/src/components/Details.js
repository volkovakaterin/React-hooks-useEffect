import React, { useState, useEffect, useRef } from 'react';

function Details(props) {
    const [user, setUser] = useState({id: '', name: ''});
    const [info, setInfo] = useState();
    let cardDetails;
    const latestId = useRef('');
    if(props.user.id !== user.id) {
        setUser(prevForm => ({...prevForm, id: props.user.id, name: props.user.name}));
        latestId.current = props.user.id;
    }

    useEffect(() => {
        function loading() {
        fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${latestId.current}.json`)
          .then(res => res.json())
          .then(
            (result) => {
              setInfo(result);
            },
            (error) => {
              console.log(error);
            }
          )
      }
        return loading()
      }, [user.id]);

    if(typeof info === 'object') {
      cardDetails = 
      <div className='details'>
      <div className='avatar' style={{ backgroundImage: `url("${info.avatar}")`, backgroundSize: 'cover',  minHeight: "350px"}}></div>
      <div className='name'>{info.name}</div>
      <div className='city'>City: {info.details.city}</div>
      <div className='company'>Company: {info.details.company}</div>
      <div className='position'>Position: {info.details.position}</div>
      </div>
      ;  
    }

    return (
      <>
      {cardDetails}
      </>
    );
  }
  
  export default Details;
  