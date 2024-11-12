import Image from "next/image"
import { NavLink } from "./NavLink/index"
import LogoSrc from "../header/Wave.svg"
import { Connect } from "./ConnectButton/index"
import { Search } from "./Search"

export function Header() {
    return(
        <header className="flex justify-center items-center px-[94.5px] pt-[46px]">
          <Image src={LogoSrc} alt="logo" className="h-[53px] w-[53px]"/>
          <div className="flex items-center gap-[53.49px] ml-[57.06px] ">
          <NavLink>DISCOVER</NavLink>
          <NavLink>CREATORS</NavLink>
          <NavLink>SELL</NavLink>
          <NavLink>STATS</NavLink>
          </div>
          <Search />
          <Connect />
        </header>
    )
}