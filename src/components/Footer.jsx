import { FilmIcon, MailIcon, Phone } from "lucide-react"

export const Footer = () => {
    return(
        <div className="md:flex bg-[#4338ca] px-[20px] py-[40px] md:px-[100px] text-white md:gap-[489px]">
            <div className="pb-[28px] flex flex-col gap-[12px]">
              <div className="flex gap-[8px]">
                <FilmIcon/>  
                <b><i>Movie Z</i></b>
              </div>
              <p className="font-normal text-[14px]">© 2024 Movie Z. All Rights Reserved.</p>
            </div>
            <div className="flex gap-[48px]">
                <div className="flex flex-col gap-[12px]">
                    <p>Contact Information</p>
                    <div className="flex items-center gap-[12px]">
                        <MailIcon/>
                        <div>
                            <p>Email:</p>
                            <p>support@movieZ.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-[12px]">
                        <Phone/>
                        <div>
                            <p>Phone:</p>
                            <p>+976 (11) 123-4567</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                    <p>Follow us</p>
                    <div className="flex flex-col gap-[12px] md:flex-row">
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