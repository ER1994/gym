import React, {useState} from "react";

const Schedule = () => {
    const [activeDay, setActiveDay] = useState("Monday");
    const filteredSchedules = SCHEDULE_DATA.filter(schedule => schedule.day.includes(activeDay));
    return (
        <section className={'py-[5rem] px-[1rem] md:px-[4rem] lg:px-[8rem] flex flex-col items-center'}>
            <div className={'flex flex-wrap gap-4 justify-center w-full'}>
                <DoWCard
                    dayOfTheWeek='Monday'
                    onClick={() => setActiveDay('Monday')}
                />
                <DoWCard
                    dayOfTheWeek="Tuesday"
                    onClick={() => setActiveDay('Tuesday')}
                />
                <DoWCard
                    dayOfTheWeek="Wednesday"
                    onClick={() => setActiveDay('Wednesday')}
                />
                <DoWCard
                    dayOfTheWeek="Thursday"
                    onClick={() => setActiveDay('Thursday')}
                />
                <DoWCard
                    dayOfTheWeek="Friday"
                    onClick={() => setActiveDay('Friday')}
                />
                <DoWCard
                    dayOfTheWeek="Saturday"
                    onClick={() => setActiveDay('Saturday')}
                />
                <DoWCard
                    dayOfTheWeek="Sunday"
                    onClick={() => setActiveDay('Sunday')}
                />
            </div>
            <div className={'py-[40px] w-full'}>
                {filteredSchedules.map((schedule, index) => (
                    <DailySchedule
                        key={index}
                        name={schedule.name}
                        time={schedule.time}
                        trainer={schedule.trainer}
                        day={schedule.day}
                    />
                ))}
            </div>
        </section>
    );
};
export default Schedule;

interface DoWCardProps {
    dayOfTheWeek: string;
}

const DoWCard: React.FC<DoWCardProps & { onClick: () => void }> = ({dayOfTheWeek, onClick}) => {
    return (
        <div
            className="text-[12px] lg:text-[15px] font-bold border-solid border hover:border-custom-blue py-[9px] px-[10px] lg:px-[32px] rounded-[23px] hover:bg-custom-blue ease-in duration-200 hover:shadow-2xl hover:text-white"
            onClick={onClick}>
            {dayOfTheWeek}
        </div>
    );
};

interface DailyScheduleProps {
    name: string;
    time: string;
    trainer: string;
    day: string[];
}

const DailySchedule: React.FC<DailyScheduleProps> = ({name, time, trainer, day}) => {
    return (
        <div className="text-[15px] font-bold py-[9px] px-[32px]">
            <ul className={'flex flex-col sm:flex-row w-full justify-center sm:justify-between bg-[#f0f0f2] px-2 items-center gap-4'}>
                <li className={'flex flex-col gap-4 text-center'}>
                    <p>Nazwa</p>
                    <p className={'w-[120px] lg:w-[154px] text-[15px] lg:text-[20px]'}>{name}</p>
                </li>

                <li className={'flex flex-col gap-4 text-center'}>
                    <p>Czas</p>
                    <p className={'text-[15px] lg:text-[20px]'}>{time}</p>
                </li>
                <li className={'flex flex-col gap-4 text-center'}>
                    <p>Trener</p>
                    <p className={'w-[130px] lg:w-[166px] text-[15px] lg:text-[20px]'}>{trainer}</p>
                </li>
                <li className={'py-4'}>
                    <button
                        className="text-[15px] lg:text-[20px] font-bold border border-solid border-gray-300 bg-gray-300 hover:border-custom-blue py-[5px] sm:py-[9px] px-[32px] rounded-[23px] hover:bg-custom-blue ease-in duration-200 hover:shadow-2xl hover:text-white">
                        DOŁĄCZ
                    </button>
                </li>
            </ul>
        </div>
    );
};

const SCHEDULE_DATA = [
    {
        name : 'Meditation',
        time : '07:00 - 08:30',
        trainer : 'Hermione Granger',
        day : ['Monday', 'Wednesday', 'Saturday']
    },
    {
        name : 'Meditation',
        time : '07:00 - 08:30',
        trainer : 'Harry Potter',
        day : ['Tuesday', 'Thursday', 'Friday']
    },
    {
        name : 'Bjj (begginers)',
        time : '17:00 - 18:30',
        trainer : 'Harry Potter',
        day : ['Monday', 'Wednesday', 'Friday']
    },
    {
        name:'Bjj (Advanced)',
        time:'17:00 - 18:30',
        trainer:'Harry Potter',
        day:['Tuesday', 'Thursday', 'Saturday']
    },
    {
        name : 'Bjj (Advanced)',
        time : '18:30 - 20:00',
        trainer : 'Harry Potter',
        day : ['Monday', 'Wednesday', 'Friday']
    },
    {
        name:'Bjj (Crossfit)',
        time:'19:00 - 20:30',
        trainer:'Ron Weasley',
        day:['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    {
        name:'Yoga (beginners)',
        time:'19:00 - 20:30',
        trainer:'Hermione Granger',
        day:['Monday', 'Wednesday', 'Friday']
    },
    {
        name:'Yoga (advanced)',
        time:'19:00 - 20:30',
        trainer:'Hermione Granger',
        day:['Tuesday', 'Thursday', 'Saturday']
        }
];