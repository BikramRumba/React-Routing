import React, {useState, useEffect} from 'react';

/*  --> useState kind of holds the information that we're
  getting from the API. AND
      --useEffect basically runs that fetch call when our component mounts.
  */

function Shop() {
  useEffect(()=> {
    fetchItem();
  }, []);

  const fetchItem = async() => {
    const data = await fetch(
      'http https://swapi.dev/api/people/1/');
      
    console.log(data);

  };

  return <div>
      <h1>Shop Page</h1>
  </div>;
}

export default Shop;

