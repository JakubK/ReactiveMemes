import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SideNav from './components/sideNav/sideNav';

import classes from './App.module.scss';
import SideNavProvider from './context/sideNarContext';

const app = () =>  {
  return (
    <div className={classes.app}>
      <SideNavProvider>
        <Navbar/>
        <SideNav/>
      </SideNavProvider>
      <Footer/>
    </div>
  )
}

export default app
