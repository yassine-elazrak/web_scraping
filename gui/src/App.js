import { useCallback, useState } from 'react';
import Circles  from './main';

function App() {
  const [data, setData] = useState([10, 20, 30, 40, 50, 60, 70, 80]);
  const updateData = useCallback(() => {
    const count = 5 + Math.round(Math.random() * 15);
    const values = [];
    for (let i = 0; i < count; i++) {
      values[i] = 10 + Math.round(Math.random() * 70);
    }
    setData(values);
  }, []);

  return (
    <>
      <button onClick={updateData}>Update Data</button>
      <Circles data={data} />
    </>
  );
}

export default App;