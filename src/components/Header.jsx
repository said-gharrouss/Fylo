import { useEffect, useRef,} from "react"

function Header() {
    const links = ["Featuers","Theam","Signin"];
    const headerRef = useRef();
    useEffect(()=>{
        document.onscroll = () =>{
            if(scrollY > 50){
                headerRef.current.style.padding = "20px 0";
                headerRef.current.style.backgroundColor = "#2A2F4F";
            } else{
                headerRef.current.style.padding = "40px 0 ";
                headerRef.current.style.backgroundColor = "transparent";
            }
        }
    },[]);
    return (
    <header ref={headerRef} className="fixed top-0 left-0 w-full duration-300 pt-[40px] z-50">
        <div className="container flex items-center justify-between
            gap-[30px] sm:gap-0 flex-col sm:flex-row">
            <div>
                <i className="fa-solid fa-house-flood-water text-white text-[40px] mr-[10px]"></i>
                <a href="#" className="text-white text-[35px] leading-[35px] ">Fylo</a>
            </div>
            <ul className="flex gap-[50px]">
                {links.map((link)=>{
                    return <li key={link}>
                        <a href={`/${link.toLowerCase()}`} className="
                        text-white hover:text-[#E3F4F4] hover:underline duration-300 
                        ">{link}</a>
                    </li>
                })}
            </ul>
        </div>
    </header>
    )
}

export default Header