import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SideNav from './components/sideNav/sideNav';

import classes from './App.module.scss';

const app = () =>  {
  return (
    <div className={classes.app}>
      <Navbar/>
      <SideNav/>
      <Footer/>
    </div>
  )
}

export default app
