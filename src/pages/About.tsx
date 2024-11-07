import BlurIn from "@/components/ui/blur-in";
import React, { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";
import BlurFade from "@/components/ui/blur-fade";


interface CardData {
    title: string[];
    description: string;
    hoverClass: string;
}

const cards: CardData[] = [
    {
        title: ['GENERA', 'IMAGENES', 'PERSONALIZADAS'],
        description: 'Transforma tus ideas en imágenes sorprendentes.',
        hoverClass: 'hover:scale-90'
    },
    {
        title: ['RESTAURA', 'IMAGENES', 'ANTIGUAS'],
        description: 'La tecnología de restauración de imágenes de nuestra IA te permite revivir fotografías antiguas, mejorando la calidad y restaurando detalles.',
        hoverClass: 'hover:scale-90',
    },
    {
        title: ['CREACION', 'EN', 'TIEMPO REAL'],
        description: 'Disfruta de resultados al instante. Nuestra IA trabaja en tiempo real para ofrecerte una experiencia fluida y efectiva.',
        hoverClass: 'hover:scale-90'
    }
]

const Card: React.FC<CardData> = ({ title, description, hoverClass }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative cursor-pointer flex h-[200px] w-[300px] lg:h-[300px] lg:w-[400px] flex-col items-center justify-center overflow-hidden rounded-lg  bg-[#161616] md:shadow-xl transition-all duration-300 hover:scale-95 ${hoverClass}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'} absolute inset-0 flex flex-col items-center justify-center`}>
                {title.map((line, index) => (
                    <p key={index} className={`font-montserrat text-white text-2xl lg:text-4xl font-black ${index % 2 === 0 ? 'text-[#1d52ff]' : ''}`}>
                        {line}
                    </p>
                ))}
            </div>
            <div className={`transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center p-4`}>
                <p className="font-montserrat text-sm lg:text-lg text-center text-[#ffffff] p-3 font-semibold">{description}</p>
            </div>
            <BorderBeam 
                size={200}
                duration={10}
                delay={0}
                borderWidth={6}
                anchor={40}
                colorFrom="#0e4eff"
                colorTo="#00c1ff"
            />
        </div>
    )
}

const CardGrid: React.FC = () => (
    <div className="flex flex-col lg:flex-row items-center justify-center select-none gap-10 mt-10 mb-16">
        {cards.map((card, index) => (
        <BlurFade key={index} delay={0.25 + index * 0.05} inView>
            <Card key={index} {...card} />
        </BlurFade>
        ))}
    </div>
);

function About () {
    return (
        <section className="flex flex-col items-center justify-center mt-12">
            <BlurIn
                word="¿Qué ofrecemos?"
                duration={1}
                className="text-white text-5xl lg:text-8xl font-bebas"
            />
            <CardGrid />
            
        </section>
    );
}

export default About;