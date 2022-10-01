import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Navbar/>
      <Footer/>
    </div>
  )
}

export default App
