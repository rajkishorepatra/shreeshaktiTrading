import React, { useState, useEffect } from 'react';
import { getHello } from './api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const result = await getHello();
      setMessage(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
