import { FilmIcon, MailIcon, Phone } from "lucide-react"

export const Footer = () => {
    return(
        <div className="md:flex  flex flex-col justify-center bg-[#4338ca] px-5 py-5 md:px-[420px] text-white ">
            <div className="pb-7 flex flex-col gap-3">
              <div className="flex gap-2">
                <FilmIcon/>  
                <b><i>Movie Z</i></b>
              </div>
              <p className="font-normal text-[14px]">© 2024 Movie Z. All Rights Reserved.</p>
            </div>
            <div className="flex justify-between">
                <div className="flex flex-col gap-3 w-screen">
                    <p>Contact Information</p>
                    <div className="flex items-center gap-3">
                        <MailIcon/>
                        <div>
                            <p>Email:</p>
                            <p>support@movieZ.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone/>
                        <div>
                            <p>Phone:</p>
                            <p>+976 (11) 123-4567</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <p>Follow us</p>
                    <div className="flex flex-col gap-3 md:flex-row">
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
        </div>
    )
}