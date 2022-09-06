import '../styles/globals.css'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import TaskColumnsList from '../components/TaskColumnsList';
import ShowSidebarButton from '../components/ShowSidebarButton';
import THEMES from '../utils/themes';
import Dialog from '@mui/material/Dialog';
import { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {

  const dataPath = "/data.json";
  const [activeBoard, setActiveBoard] = useState(0);
  const [data, setData] = useState();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [theme, setTheme] = useState(false);
  const [modalNewBoardOpen, setModalNewBoardOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (theme === false) {
      document.documentElement.style.setProperty('--main-bg-1', THEMES.LIGHT.mainBg1);
      document.documentElement.style.setProperty('--main-bg-2', THEMES.LIGHT.mainBg2);
      document.documentElement.style.setProperty('--main-bg-3', THEMES.LIGHT.mainBg3);
      document.documentElement.style.setProperty('--lines', THEMES.LIGHT.lines);
      document.documentElement.style.setProperty('--text-1', THEMES.LIGHT.text1);
      document.documentElement.style.setProperty('--text-2', THEMES.LIGHT.text2);
    } else {
      document.documentElement.style.setProperty('--main-bg-1', THEMES.DARK.mainBg1);
      document.documentElement.style.setProperty('--main-bg-2', THEMES.DARK.mainBg2);
      document.documentElement.style.setProperty('--main-bg-3', THEMES.DARK.mainBg3);
      document.documentElement.style.setProperty('--lines', THEMES.DARK.lines);
      document.documentElement.style.setProperty('--text-1', THEMES.DARK.text1);
      document.documentElement.style.setProperty('--text-2', THEMES.DARK.text2);
    }
  }, [theme])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(dataPath);
      const data = await response.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, [])

  return (
    <>
      <div className="container">
        <Sidebar theme={theme} setTheme={setTheme} data={data} activeBoard={activeBoard} setActiveBoard={setActiveBoard} sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}></Sidebar>
        <ShowSidebarButton sidebarVisible={sidebarVisible} setSidebarVisible={setSidebarVisible}></ShowSidebarButton>
        <div className="main">
          <Header activeBoard={activeBoard} data={data}></Header>
          <TaskColumnsList data={data} activeBoard={activeBoard}></TaskColumnsList>
          <Component {...pageProps} />
        </div>
        <Dialog open={modalOpen} onClose={() => setModalOpen(false)}>
          <p>test</p>
          <button className="button btn-secondary" onClick={() => setModalOpen(false)}>
            close
          </button>
        </Dialog>
      </div>
    </>
  )
}

export default MyApp
