
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partners
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a>
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1100555146007674910/1101573609643847800/wp3705672.jpg" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Serenity*</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                        The popular in-game clan that has one of the more active side of Black Squad on its team! and described as one of the best clans-to-date!
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>

                    </div>
            

                </div>
                <div className="py-10"></div>
        </>
    );
};