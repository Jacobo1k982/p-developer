import { AiFillCopyrightCircle } from "react-icons/ai";
import { MdMail } from "react-icons/md";

const Footer = () => {
    return (
        <footer
            className="
                relative
                w-full 
                bg-gradient-to-br from-[#0a0a0a]/90 via-[#0f0f0f]/80 to-[#0a0a0a]/95
                backdrop-blur-xl 
                border-t border-white/10
                shadow-[0_-10px_30px_-15px_rgba(0,0,0,0.5)]
                mt-16 
                py-8 
                px-4 
                text-gray-300 
                text-sm
                overflow-hidden
            "
        >
            {/* Efecto de luz superior */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

                {/* ---- COPYRIGHT ---- */}
                <div className="
                    flex items-center gap-2 
                    text-gray-400
                    transition-all duration-300
                    hover:text-white
                    group
                ">
                    <AiFillCopyrightCircle className="
                        text-base 
                        transition-all duration-300
                        group-hover:scale-110
                        group-hover:text-white
                    " />
                    <span className="font-medium">2025 · All Rights Reserved.</span>
                </div>

                {/* ---- MADE BY ---- */}
                <div className="flex items-center">
                    <a
                        href="https://www.jacana-dev.com"
                        target="_blank"
                        rel="noreferrer"
                        className="
                            group
                            flex items-center gap-2
                            px-4 py-2 rounded-full
                            bg-white/5 backdrop-blur-sm
                            border border-white/10
                            transition-all duration-300
                            hover:bg-white/10
                            hover:border-white/20
                            hover:shadow-lg
                            hover:shadow-white/5
                            hover:-translate-y-0.5
                        "
                    >
                        <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                            Made with
                        </span>
                        <span className="text-red-500 group-hover:scale-110 transition-transform duration-300 inline-block">
                            ❤️
                        </span>
                        <span className="font-semibold text-white group-hover:text-white/90 transition-colors">
                            Jacobo
                        </span>
                    </a>
                </div>

                {/* ---- EMAIL ---- */}
                <div className="hidden md:flex items-center gap-3 group">
                    <div className="
                        p-2 rounded-full
                        bg-white/5 backdrop-blur-sm
                        border border-white/10
                        transition-all duration-300
                        group-hover:bg-white/10
                        group-hover:border-white/20
                    ">
                        <MdMail className="
                            text-lg 
                            text-gray-400
                            transition-all duration-300
                            group-hover:text-white
                            group-hover:scale-110
                        " />
                    </div>
                    <a
                        href="mailto:askmecr@gmail.com"
                        className="
                            font-medium
                            text-gray-400
                            transition-all duration-300
                            hover:text-white
                            hover:tracking-wide
                            relative
                            after:content-['']
                            after:absolute
                            after:bottom-0
                            after:left-0
                            after:w-0
                            after:h-px
                            after:bg-gradient-to-r
                            after:from-white
                            after:to-transparent
                            after:transition-all
                            after:duration-300
                            hover:after:w-full
                        "
                    >
                        askmecr@gmail.com
                    </a>
                </div>
            </div>
            
            {/* Efecto de luz inferior */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        </footer>
    );
};

export default Footer;