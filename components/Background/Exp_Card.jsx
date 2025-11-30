import React from 'react'
import CardLayout from '../Common/CardLayout'

const Exp_Card = ({ data }) => {
    return (
        <CardLayout>
            <div
                className="
                    card_stylings 
                    px-8 py-10 
                    rounded-2xl
                    bg-[#0f0f0f]/60 
                    backdrop-blur-md
                    border border-white/5
                    shadow-lg
                    transition-all duration-300
                    hover:shadow-xl hover:-translate-y-1
                "
            >
                {/* Job Title */}
                <h3 className="text-[18px] text-Snow font-semibold tracking-wide">
                    {data.title}
                </h3>

                {/* Role */}
                <p className="text-sm text-LightGray/80 italic mt-1">
                    {data.role}
                </p>

                {/* URL */}
                <p className="text-LightGray/60 text-xs italic mt-1 truncate">
                    <a
                        href={data.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-Snow/80 transition"
                    >
                        {data.url}
                    </a>
                </p>

                {/* Description */}
                <p className="text-LightGray/90 text-sm mt-5 leading-relaxed text-justify">
                    {data.desc}
                </p>

                {/* Footer — Year & Location */}
                <div
                    className="
                        flex justify-between items-center 
                        text-LightGray/80 
                        bg-white/5 
                        border border-white/10
                        w-full 
                        text-xs 
                        rounded-full 
                        py-3 px-6 
                        mt-6 
                        backdrop-blur-sm
                    "
                >
                    <span>{data.year}</span>
                    <span>{data.location}</span>
                </div>
            </div>
        </CardLayout>
    )
}

export default Exp_Card
