import React from 'react';

export default function Dashboard(props) {

  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/login');
  }

  return (
    <div>
      Seus Itens<br /><br />
      <input type="button" onClick={handleLogout} value="Reservar!" />
    </div>
  );
}
