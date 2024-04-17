import Header from './components/header'
import Intro from './components/intro'
import {ModeToggle} from './components/dark-mode'

export default function Home() {
  return (
    <main className="">
      <Header></Header>
      <Intro></Intro>
      <div className=''><ModeToggle/></div>
    </main>
  );
}
