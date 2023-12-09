import { ElementRef, useRef, useState } from "react";
import UserItem from '../_components/userItem'
import {
  ChevronsLeft,
  MenuIcon,
  Plus,
  PlusCircle,
  Search,
  Settings,
  Trash
} from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

function navigation() {
  const sidebar = useRef<ElementRef<"aside">>(null);
  const [isOpen, setIsOpen] = useState(false);

  const documents=useQuery(api.documents.get);
  console.log(documents);
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
  const onClickMenu=()=>{
    setIsOpen(false);
    sidebar.current.style.width = '240px';
  }
  return (
    <>
      <aside ref={sidebar} className="group/sidebar overflow-y-auto flex flex-col w-[240px] h-full bg-slate-100 group/sidebar relative transition-all delay-200 ease-in-out">
        <div onClick={handleChevronClick} className="top-3 right-2 absolute group-hover/sidebar:bg-slate-400 group-hover/sidebar:text-slate-900 text-slate-500 cursor-pointer">
          <ChevronsLeft />
        </div>

        <div className="p-2">
          <UserItem/>
        </div>


        <div className="p-2">{documents?.map((item)=>{
          return (<p>{item.title}</p>)
        })}</div>
        <div onMouseDown={onHandleMouseUp} onClick={onHandleClick} className="opacity-50 absolute right-0 top-0 group-hover/sidebar:opacity-100 transition cursor-ew-resize  h-full w-1 bg-slate-600 " />
      </aside>
      {isOpen && <nav className="p-2 ">
        <MenuIcon className=" hover:bg-slate-400" onClick={onClickMenu}></MenuIcon>
      </nav>
      }
    </>
  )
}

export default navigation