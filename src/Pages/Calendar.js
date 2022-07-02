import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setdate] = useState(new Date());

    let footer = <p>Please Choose a day.</p>;
    if (date) {
        footer = <p className='p-5 text-pink-500 border border-1 mt2'>Choosen The Date <span className='font-bold pl-1'>{format(date, 'PP')}.</span> </p>;
    }
    
    return (
        <div>
            <>
                <div className='flex items-center justify-center'>
                    <DayPicker
                     styles={{
                        caption: { color: 'rgb(236,72,153)' }
                      }}
                        mode="single"
                        selected={date}
                        onSelect={setdate}
                        footer={footer} />
                </div>
            </>

        </div>
    );
};

export default Calendar;