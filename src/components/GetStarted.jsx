
function GetStarted() {
  return (
    <section className="pt-[100px] sm:pt-[200px] relative z-[1]">
        <div className="container">
          <div className="mx-auto text-white bg-[#0C356A] text-center shadow-[0px 7px 29px 0px #64646f33]
          p-[30px] w-[800px] max-w-full">
            <h2 className="text-[30px] leading-[30px] font-bold">Get early access today</h2>
            <p className="my-[30px] md:px-[40px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus at veniam exercitationem harum quos repellat soluta fuga pariatur tenetur animi.</p>
            <div className="flex items-center flex-wrap gap-[20px] md:px-[80px]">
                <input type="text" className=" w-full md:flex-1 h-[40px] px-[20px] border-none outline-none rounded-full text-[#0C356A] text-sm" placeholder="Exmple@gmail.com"/>
                <button className="button-style w-full md:w-[150px] h-[40px] ">Get Started For Free</button>
            </div>
          </div>
        </div>
    </section>
  )
}

export default GetStarted