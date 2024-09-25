
function Testimonials() {
    const testimonials = [
        {
            text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam ut voluptatibus enim nesciunt? Vel optio perferendis repudiandae consequatur porro alias libero sequi qui expedita.",
            name : "Ahmed",
            jobTitle : "Founder & CEO Huddle",
            profile : "/src/assets/images/profile-1.jpg"
        },
        {
            text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam ut voluptatibus enim nesciunt? Vel optio perferendis repudiandae consequatur porro alias libero sequi qui expedita.",
            name : "Mohamed",
            jobTitle : "Founder & CEO Huddle",
            profile : "/src/assets/images/profile-2.jpg"
        },
        {
            text : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ullam ut voluptatibus enim nesciunt? Vel optio perferendis repudiandae consequatur porro alias libero sequi qui expedita.",
            name : "Eman",
            jobTitle : "Founder & CEO Huddle",
            profile : "/src/assets/images/profile-3.jpg"
        }
    ] 
    return (
        <section className="pt-[100px] md:pt-[200px]">
            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] relative">
            <i className="fa-solid fa-quote-left absolute text-primary text-[40px] top-[-25px] left-[15px]  
            sm:text-[80px] sm:top-[-50px] sm:left-[8px] z-[-1]"></i>
                {testimonials.map((obj,key)=>{
                    return (
                        <div className="bg-[#0C356A] p-[20px] text-white shadow-[0px 7px 29px 0px #64646f33]
                        rounded-[5px]" key={key}>
                            <p className="mb-[20px] leading-[1.4] text-sm">{obj.text}</p>
                            <div className="flex items-center gap-[20px]">
                                <img className="w-[50px] h-[50px] rounded-[50px] object-contain" src={obj.profile} alt="" />
                                <div>
                                    <span className="block font-semibold mb-[-2px]">{obj.name}</span>
                                    <span className="text-[12px] sm:text-sm">{obj.jobTitle}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials