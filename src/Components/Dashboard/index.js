import React, { useState, useEffect } from 'react';

//USe Hooks to load change state
function Dashboard(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  
  const handleClick = () => {
    console.log(`Click happened ${count} times`);
    setCount(count + 1);
  }

  return (
  <div>
    {/* <button onClick={handleClick}>{`Click Me ${props.user}`}</button>
    <p>You clicked {count} times</p> */}
  </div>
  )
}

export default Dashboard;