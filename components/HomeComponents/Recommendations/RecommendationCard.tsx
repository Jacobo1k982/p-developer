'use client';

import React from 'react'
import CardLayout from '@/components/Common/CardLayout'

const RecommendationCard = ({ data }) => {
    return (
        <CardLayout>
            <div className="p-8 h-full relative transition-all duration-200 antialiased">
                <img
                    src={data?.image}
                    className="absolute z-10 right-10 -top-5 border-[#58a6ff] w-16 h-16 border-[3px] rounded-full m-0 object-cover"
                    alt={data?.name || 'Avatar'}
                />
                <div className="text-[#c9d1d9] underline italic">
                    <a
                        href={data?.facebookURL}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#58a6ff] transition-colors duration-200"
                    >
                        {data?.name}
                    </a>
                </div>
                <div className="text-xs text-[#8b949e] italic mt-1">{data?.designation}</div>
                <div className="text-sm mt-2 text-[#8b949e] font-normal leading-relaxed">
                    {data?.view}
                </div>
            </div>
        </CardLayout>
    )
}

export default RecommendationCard