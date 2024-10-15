export default function header(){
    return(
        <nav className="navigation p-0.5">
            <div className="headerContainer flex justify-betwen mx-20 my-4">
                <div className="logo text-5xl font-bold">AQ</div>
                <ul className="list flex items-center gap-10">
                    <li className="list1 text-xl">Home</li>
                    <li className="list1 text-xl">About Us</li>
                    <li className="list1 text-xl">Portfolio</li>
                    <li className="list1 text-xl">Contact</li>
                </ul>
                <button className="buttonp-2 bg-yellow-400 rounded-md text-2xl hover:bg-yellow-600"> Hire Me</button>

            </div>
        </nav>
    )
}