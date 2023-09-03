import crossfit from '../assets/cross-fit.jpg';
import crossfit_2 from '../assets/cross-fit_2.jpg';
import crossfit_3 from '../assets/cross-fit_3.jpg';
import bjj_2 from '../assets/bjj_2.jpg';
import bjj_3 from '../assets/bjj_3.jpg';
import bjj_4 from '../assets/bjj_4.jpg';
import meditation from '../assets/meditation.jpg';
import yoga_5 from '../assets/yoga_5.jpg';
import yoga_4 from '../assets/yoga_4.jpg';
import yoga_6 from '../assets/yoga_6.jpg';
import yoga_7 from '../assets/yoga_7.jpg';
import running from '../assets/running.jpg';
export const Gallery = () => {
    return (

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-14">
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={crossfit} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bjj_2} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={yoga_5} alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={yoga_7} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bjj_3} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={running} alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={yoga_6} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={crossfit_2} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={meditation} alt=""/>
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={crossfit_3} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={yoga_4} alt=""/>
                </div>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={bjj_4} alt=""/>
                </div>
            </div>
        </div>

);
};