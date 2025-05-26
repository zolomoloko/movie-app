import { ChevronDown } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"

export const Genre=()=>{
    return(
        <div>
            <Dialog>
              <DialogTrigger>
                <Button variant="outline">
                  <ChevronDown /> Genre
                </Button>
              </DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                   <DialogTitle>Genres</DialogTitle>
                   <DialogDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
                   </DialogDescription>
                  </DialogHeader>
              </DialogContent>
            </Dialog>
        </div>
    )
}