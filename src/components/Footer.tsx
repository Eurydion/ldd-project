import PUPMSCLOGO from "../assets/image/PUPMSCLogo.png";

function Footer() {
    return (
        <div>
            <div className="bg-(--color-shade1) px-6 py-6">
                <div className="max-w-5xl mx-auto flex justify-between items-center">
                    {/* Left side: Logo + Title */}
                    <div className="flex items-center gap-3">
                        <img src={PUPMSCLOGO} alt="PUP-MSC Logo" className="w-12 h-12 object-contain" />
                        <div className="flex flex-col">
                            <span className="font-extrabold text-2xl">PUP Microsoft Student Community</span>
                            <span>Leadership Development Department - Portal</span>
                        </div>
                    </div>

                    {/* Right side: Contact button */}
                    <button className="w-1/6 px-2 py-2 rounded-full bg-(--color-darkshade1) text-(--color-background) hover:opacity-80 transition">
                        Contact Us!
                    </button>
                </div>
            </div>
        </div>

    );
}

export default Footer;
