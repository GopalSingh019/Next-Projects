import { ElementRef, useEffect, useRef, useState } from "react";
import UserItem from '../_components/userItem'
import Item from '../_components/item'
import {
  ChevronsLeft,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  SettingsIcon,
  Trash
} from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Setting from "./setting";
import SearchDoc from './SearchDoc';
import TrashDoc from './trash';

function Navigation() {
  const sidebar = useRef<any>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const documents = useQuery(api.documents.get,{});
  // console.log(documents);

  useEffect(()=>{
    if(screen.width<700){
      sidebar.current.style.width= "0%"
      setIsOpen(true);
    }
},[screen.width])

  const handleMouseMove = (event: MouseEvent) => {
    if (event.clientX > 250 && event.clientX < 420)
      sidebar.current.style.width = `${event.clientX}px`;
  }
  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }


  const onHandleMouseUp = () => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }


  const onHandleClick = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  const handleChevronClick = () => {
    setIsOpen(true);
    sidebar.current.style.width = '0px';
  }
  const onClickMenu = () => {
    setIsOpen(false);
    sidebar.current.style.width = '260px';
    if(screen.width<700){
      sidebar.current.style.width= "100%"
    }
  }
  return (
    <>
      <aside ref={sidebar} className="group/sidebar w-[260px] dark:bg-[#2a2929] overflow-y-auto flex flex-col  h-full bg-slate-100 group/sidebar relative transition-all delay-200 ease-in-out">
        <div onClick={handleChevronClick} className="top-3 right-2 absolute group-hover/sidebar:bg-slate-300 group-hover/sidebar:text-slate-900 dark:group-hover/sidebar:text-slate-50 text-slate-500 dark:text-slate-50 dark:group-hover/sidebar:bg-slate-600 cursor-pointer">
          <ChevronsLeft />
        </div>
  
        <div className="p-2">
          <UserItem />
        </div>
        <div className="pt-4 pb-4">
        <div className="pl-4  cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200 flex items-center gap-2 text-muted-foreground">
          <SettingsIcon  className="h-4 w-4"/> 
          <Setting/>
        </div>

        <div className="pl-4  cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200 flex items-center gap-2 text-muted-foreground">
          <Search  className="h-4 w-4"/> 
          <SearchDoc/>
        </div>

        </div>
        <div className="p-2 ">{documents?.map((item) => {
          return (<Item key={item._id} item={item}></Item>)
        })}</div>

        <div className="mt-4 pl-4 flex hover:bg-slate-200 dark:hover:bg-slate-800  text-muted-foreground items-center gap-2">
          <Trash className=" h-4 w-4"/>
        <TrashDoc/>
        </div>
        <div onMouseDown={onHandleMouseUp} onClick={onHandleClick} className="absolute right-0 top-0 group-hover/sidebar:block bg-slate-400 hidden  cursor-ew-resize  h-full w-1 " >
          {/* <div className=" h-full w-full"></div> */}
          </div>
      </aside>
      {isOpen && <nav className="p-2 ">
        <MenuIcon className=" hover:bg-slate-300 dark:hover:bg-slate-600" onClick={onClickMenu}></MenuIcon>
      </nav>
      }
    </>
  )
}

export default Navigation