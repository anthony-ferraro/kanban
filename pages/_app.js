import '../styles/globals.css'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TaskColumnsList from '../components/TaskColumnsList';

import { useState, useEffect } from 'react';
function MyApp({ Component, pageProps }) {

  const dataPath = "/data.json";
  const [activeBoard, setActiveBoard] = useState(0);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataPath);
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, [])

  return <>
    <div className="container">
      <Sidebar data={data} activeBoard={activeBoard} setActiveBoard={setActiveBoard}></Sidebar>
      <div className="main">
        <Header></Header>
        <TaskColumnsList data={data} activeBoard={activeBoard}></TaskColumnsList>
        <Component {...pageProps} />
      </div>
    </div>
  </>
}

export default MyApp
