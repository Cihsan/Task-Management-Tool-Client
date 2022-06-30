import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = () => {
    const [date, setdate] = useState(new Date());

    let footer = <p>Please Choose a day.</p>;
    if (date) {
        footer = <p className='pt-5 text-pink-500'>Choosen The Date {format(date, 'PP')}.</p>;
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