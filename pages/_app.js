import '../styles/globals.css'
import '/styles/utilities.css'
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
function MyApp({ Component, pageProps }) {
  return <>
    <div className="container">
      <Sidebar></Sidebar>
      <div className="main">
        <Header></Header>
        <Component {...pageProps} />
      </div>
    </div>
  </>
}

export default MyApp
