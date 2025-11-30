import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer
            className="
                w-full 
                bg-MidNightBlack/80 
                backdrop-blur-lg 
                border-t border-white/5 
                mt-10 
                py-5 
                px-4 
                text-LightGray 
                text-xs
            "
        >
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">

                {/* ---- COPYRIGHT ---- */}
                <div className="flex items-center gap-1 text-Snow/70">
                    <AiFillCopyrightCircle className="text-base" />
                    <span>2025 · All Rights Reserved.</span>
                </div>

                {/* ---- MADE BY ---- */}
                <div className="flex items-center">
                    <a
                        href="https://www.fiverr.com/codeworthy"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            hover:text-Snow 
                            transition 
                            duration-300 
                            flex 
                            items-center 
                            gap-1
                        "
                    >
                        Made with ❤️ by <span className="font-semibold text-Snow">Jacobo</span>
                    </a>
                </div>

                {/* ---- EMAIL ---- */}
                <div className="hidden md:flex items-center gap-2 text-Snow/70">
                    <MdMail className="text-lg" />
                    <a
                        href="mailto:askmecr@gmail.com"
                        className="hover:text-Snow transition duration-300"
                    >
                        askmecr@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
