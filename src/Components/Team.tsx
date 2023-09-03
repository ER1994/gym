import React from "react";
import bjj from '../assets/bjj_5.jpg';
import yoga from '../assets/yoga_3.jpg';
import crossfit from '../assets/cross-fit_4.jpg';

const Team = () => {

    return (
        <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
            <div className="w-full">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                            <h2 className="mb-4 text-2xl md:text-3xl font-bold text-dark">
                                Nasz zespół
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center -mx-4">
                    <TeamCard
                        name="Harry Potter"
                        profession="Trener BJJ/Medytacja"
                        imageSrc={bjj}
                    />
                    <TeamCard
                        name="Hermione Granger"
                        profession="Trener jogi/Medytacja"
                        imageSrc={yoga}
                    />
                    <TeamCard
                        name="Ron Weasley"
                        profession="Trener crossfit"
                        imageSrc={crossfit}
                    />
                </div>
            </div>
        </section>
    );
};

export default Team;

interface TeamCardProps {
    imageSrc: string;
    name: string;
    profession: string;
}
const TeamCard: React.FC<TeamCardProps> = ({ imageSrc, name, profession }) => {
    return (
        <>
            <div className="w-full px-6 lg:px-14 md:w-1/3 xl:w-1/4">
                <div className="mx-auto mb-10 w-full max-w-[370px]">
                    <div className="relative overflow-hidden rounded-lg">
                        <img src={imageSrc} alt="" className="w-[216px] h-[277px]"/>
                        <div className="absolute left-0 w-[210px] text-center bottom-1">
                            <div className="relative px-3 py-1 mx-5 overflow-hidden bg-white rounded-lg">
                                <h3 className="text-base font-semibold text-dark">{name}</h3>
                                <p className="text-sm text-body-color">{profession}</p>
                                <div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};