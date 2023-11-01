import logo from '../images/airtel-logo.png'


export default function Navbar() {


    return (
        <body>
            <nav className=''>
                <div className="flex justify-end text-[11px] space-x-5 px-[8rem] ">
                    <button className="hover:text-red-500">
                        DSARF
                    </button>
                    <button className="hover:text-red-500">
                        SMARTCASH
                    </button>
                    <button className="hover:text-red-500">
                        PERSONAL
                    </button>
                    <button className="hover:text-red-500">
                        BOARDBAND
                    </button>
                    <button className="hover:text-red-500">
                        AIRTEL TOUCHING LIVES
                    </button>
                    <button className="hover:text-red-500">
                        BUSINESS
                    </button>
                    <button className="hover:text-red-500">
                        ABOUT US
                    </button>
                    <button className="hover:text-red-500">
                        CAREER
                    </button>
                </div>
                <div className="flex justify-center py-[2rem] space-x-5">
                    <img className='w-[6rem]' src={logo} alt="AIRTEL" />
                    <button className="hover:text-red-500">
                        Get 5G
                    </button>
                    <button className="hover:text-red-500">
                        PAY & RECHARGE
                    </button>
                    <button className="hover:text-red-500">
                        VOICE & DATA
                    </button>
                    <button className="hover:text-red-500">
                        POSTPAID
                    </button>
                    <button className="hover:text-red-500">
                        SERVICES
                    </button>
                    <button className="hover:text-red-500">
                        OUR NETWORKS
                    </button>
                    <button className="hover:text-red-500">
                        PREMIER
                    </button>
                    <button className="hover:text-red-500">
                        GET HELP
                    </button>
                    <button className="hover:text-red-500">
                        e SIM
                    </button>
                    <button className="hover:text-red-500">
                        VoLTE
                    </button>
                </div>                                
            </nav>          
        </body>


    )
}
