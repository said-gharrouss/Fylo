
function Features() {
    const features= [
        {
            icon : "fa-solid fa-laptop",
            featuresTitle : "Acces your files anywhere"
        },
        {
            icon : "fa-solid fa-shield-halved",
            featuresTitle : "Security you can trust"
        },
        {
            icon : "fa-solid fa-business-time",
            featuresTitle : "Real-time collaboration"
        },
        {
            icon : "fa-solid fa-file-circle-plus",
            featuresTitle : "store any type of file"
        }
        
    ]
    const featuresDiscription = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente veritatis sit, Sapiente veritatis sit";

    return (
        <div className="container">
            <div className="text-white pt-[100px] sm:pt-[200px] grid grid-columns gap-x-[100px] gap-y-[50px] sm:gap-y-[80px]
            w-[800px] max-w-full mx-auto">
                {features.map((e,key) => {
                    return <div key={key} className="text-center">
                        <i className={`${e.icon} text-[80px] text-[#5CD2E6]`}></i>
                        <h3 className="text-xl font-semibold my-[15px]">{e.featuresTitle}</h3>
                        <p className="text-sm leading-normal">{featuresDiscription}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Features