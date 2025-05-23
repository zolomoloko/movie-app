
export const DetailsOverview = ({movie}) => {
    return(
        <div className="pt-[32px] px-5 md:px-0 flex gap-8 justify-between">
            <img src="../bla.jpg" alt="zurag" className="w-[100px] h-[148px] md:hidden"/>
            <div>
                <div className="flex gap-3 flex-wrap font-bold">
                    <span className="border-[#e4e4e7] border-[1px] rounded-full px-[10px] py-[2px]">{}</span>
                    <span className="border-[#e4e4e7] border-[1px] rounded-full px-[10px] py-[2px]">Fairy Tale</span>
                </div>
                <p className="text-[16px] font-normal pt-5">{movie?.overview}</p>
            </div>
        </div>
    )
}