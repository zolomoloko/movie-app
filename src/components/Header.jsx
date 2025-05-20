import { ChevronDown, FilmIcon, Moon, Search } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const Header = () => {
    return(
        <div className=" h-[59px] flex justify-between items-center p-[20px]">
            <div className="flex gap-[8px] text-sky-800">
                <FilmIcon className="h-[20px] w-[20px]"/>
                <b><i>MovieZ</i></b>
            </div>
            <div className="flex gap-[12px] invisible md:visible">
                <Button variant="outline"><ChevronDown/> Genre</Button>
                <Button variant="outline">
                    <Search/>
                    <input type="text" placeholder="Search.." className="outline-none"/>
                </Button>
            </div>
            <div className="flex gap-[12px]">
                <Button variant="outline" className="visible sm:invisible"><Search/></Button>
                <Button variant="outline"><Moon/></Button>
            </div>
        </div>
    )
}