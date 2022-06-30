import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = () => {
    return (
    <div className='flex justify-center mb-32 mt-20'>
        <DayPicker />
    </div>
    );
};

export default Calender;