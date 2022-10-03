import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import SideNav from './components/sideNav/sideNav';

import classes from './App.module.scss';
import SideNavProvider from './context/sideNarContext';
import MemeFeed from './views/memeFeed';

const app = () =>  {
  return (
    <div className={classes.app}>
      <SideNavProvider>
        <Navbar/>
        <SideNav/>
      </SideNavProvider>
      <main className={classes.app__content}>
        <MemeFeed/>
      </main>
      <Footer/>
    </div>
  )
}

export default app
