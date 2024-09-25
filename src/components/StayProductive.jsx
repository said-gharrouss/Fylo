
function StayProductive() {
    return (
        <section>
            <div className="container pt-[100px] md:pt-[200px] grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
                <div>
                    <img src="/src/assets/images/illustration-stay-productive.png" alt="" />
                </div>
                <div className="text-white  mt-[50px] md:mt-[0px]">
                    <h2 className="text-[35px] leading-[1.3] font-semibold">Stay Productive,<br /> Wherever you are</h2>
                    <div className="my-[15px] text-[13px] tracking-[0.3px]">
                        <p className="mb-[10px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam repellendus beatae quisquam nihil reprehenderit, omnis sequi deserunt autem asperiores eligendi.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga error aperiam tempore obcaecati expedita temporibus iste, illo fugit eum adipisci!</p>
                    </div>
                    <div className="text-primary  pb-[5px] w-fit cursor-pointer relative">
                        <span className="before:content-[''] before:absolute before:w-[165px] before:h-[2px] before:bg-primary before:bottom-[-3px]">See how Fylo works</span>
                        <span className="ml-[15px] moveRight-animation"><i className="fa-solid fa-circle-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StayProductive