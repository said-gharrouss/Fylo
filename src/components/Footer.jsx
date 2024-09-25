
function Footer() {
    const contact = [
      {
        icon : "fa-solid fa-phone-volume",
        text : "+2120606060606",
      },
      {
        icon : "fa-regular fa-envelope",
        text : "exmple@fylo.com",
      }
    ]
    const linksGroupOne = ["About Us","Jobs","Press","Blog"];
    const linksGroupTwo = ["Contact Us","Terms","Privacy"];
    const socialMediaIcons = ["fa-brands fa-facebook-f","fa-brands fa-x-twitter","fa-brands fa-instagram"];
    return (
      <section className="py-[100px] sm:pt-[200px] bg-[#2A2F4F] mt-[-100px] relative">
        <div className="container ">

          <div className="mt-[30px] text-center sm:text-start sm:mt-[0px]">
              <i className="fa-solid fa-house-flood-water text-white text-[40px] mr-[10px]"></i>
              <a href="#" className="text-white text-[35px] leading-[35px]">Fylo</a>
          </div>

          <div className="text-white  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[60px] gap-[50px] sm:gap-[100px] ">

            <div className="flex gap-[10px] text-center sm:text-start">
              <span><i className="fa-solid fa-location-dot"></i></span>
              <p className="cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni placeat iure a qui saepe tempore.</p>
            </div>

            <div className="mx-auto">
              {contact.map((item,key)=>{
                return <div key={key} className="mb-[15px] last-of-type:mb-0">
                  <span className="mr-[10px]"><i className={item.icon}></i></span>
                  <span className="text-sm">{item.text}</span>
                </div>
              })}
            </div>

            <div className="flex gap-[40px] mx-auto">
              <ul className="">
                {linksGroupOne.map((link,key)=>{
                  return (
                    <li className="mb-[15px] cursor-pointer hover:underline" key={key}>
                      <a href="#">{link}</a>
                    </li>
                  )
                })}
              </ul>
              <ul>
              {linksGroupTwo.map((link,key)=>{
                  return (
                    <li className="mb-[15px] cursor-pointer hover:underline" key={key}>
                      <a  href="#" >{link}</a>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="flex gap-[20px] mx-auto">
              {socialMediaIcons.map((icon,key)=>{
                return <span className="w-[40px] h-[40px] border-[1px] border-[white] rounded-full flex items-center justify-center cursor-pointer
                hover:text-[#14171a] first-of-type:hover:text-[#1877f2] last-of-type:hover:text-[#c13584]  hover:duration-300" key={key}>
                  <i className={icon}></i>
                </span>
              })}
            </div>

          </div>
        </div>
      </section>
    )
}
export default Footer;