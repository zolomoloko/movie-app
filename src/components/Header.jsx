import { ChevronDown, FilmIcon, Moon, Search } from "lucide-react"
import { Button } from "./ui/button"

export const Header = () => {
    return(
        <div className=" h-[59px] flex justify-between items-center p-[20px]">
            <div className="flex gap-[8px]">
                <FilmIcon className="h-[20px] w-[20px]"/>
                <b><i>Movie Z</i></b>
            </div>
            <div className="flex gap-[12px]">
                {/* <button><ChevronDown/> Genre</button> */}
                <div>
                    <Button variant="outline"><Search/></Button>
                    {/* <input type="text" placeholder="Search.."/> */}
                </div>
                <Button variant="outline"><Moon/></Button>
            </div>
        </div>
    )
}