import Header from './components/header'
import Intro from './components/intro'
import {ModeToggle} from './components/dark-mode'
import Experinence from './components/experience';

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Intro></Intro>
      <Experinence></Experinence>
      <div className='z-[999] top-[90%] fixed right-[2rem]'><ModeToggle/></div>
    </main>
  );
}
