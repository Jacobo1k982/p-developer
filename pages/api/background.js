// pages/api/background.ts   (Pages Router)

const backgroundData = {
    education: [
        {
            id: "edu-0",
            institution: "UET Peshawar",
            degree: "BS, Computer System Engineering",
            description: "Bachelor's Degree in Computer System Engineering from UET Peshawar.",
            period: "2018-2022"
        },
        {
            id: "edu-1",
            institution: "Peshawar Model Degree College",
            degree: "HSSC, Pre Engineering",
            description: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
            period: "2015-2017"
        },
        {
            id: "edu-2",
            institution: "Falcon Academy",
            degree: "SSC, Science Subjects",
            description: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            period: "2013-2015"
        },
    ],
    experience: [
        {
            id: "exp-1",
            company: "JMM Technologies",
            role: "Frontend Developer",
            url: "https://jmm.ltd/",
            description: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
            period: "02/2023 - Present",
            location: "Peshawar, Pakistan"
        },
        {
            id: "exp-2",
            company: "HauzaTech",
            role: "Internee",
            url: null,  // o "" si prefieres string vacío
            description: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
            period: "02/2023 - Present",
            location: "Peshawar, Pakistan"
        },
        {
            id: "exp-3",
            company: "Encoder Bytes",
            role: "PHP Developer",
            url: "https://www.encoderbytes.com/",
            description: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            period: "09/2020 - 02/2021",
            location: "Peshawar, Pakistan"
        },
    ]
};

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json(backgroundData);
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}