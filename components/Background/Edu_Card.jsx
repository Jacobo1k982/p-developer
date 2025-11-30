import React from 'react'
import CardLayout from '../Common/CardLayout'

const Edu_Card = ({ data }) => {
    return (
        <CardLayout className="keepItEmpty">
            <div className="
                card_stylings 
                px-8 py-10 
                rounded-2xl 
                bg-[#0f0f0f]/60 
                backdrop-blur-md 
                shadow-lg 
                border border-white/5 
                transition-all duration-300
                hover:shadow-xl hover:-translate-y-1
            ">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h3 className="text-[18px] text-Snow font-semibold tracking-wide">
                        {data.title}
                    </h3>

                    <div className="
                        flex items-center justify-center 
                        text-LightGray 
                        bg-white/5 
                        border border-white/10
                        rounded-full 
                        w-28 h-9 
                        text-xs 
                        font-medium 
                        backdrop-blur-sm
                    ">
                        {data.year}
                    </div>
                </div>

                {/* Degree */}
                <p className="text-xs text-LightGray/80 italic mt-2 tracking-wide">
                    {data.degree}
                </p>

                {/* Details */}
                <p className="text-LightGray/90 text-sm mt-5 leading-relaxed">
                    {data.detail}
                </p>
            </div>
        </CardLayout>
    )
}

export default Edu_Card
