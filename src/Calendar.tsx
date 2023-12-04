import { BryntumCalendar } from '@bryntum/calendar-react';
import React, {useEffect, useState} from 'react';

const Calendar = () => {

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        },1000);

    }, []);


    return (
        <BryntumCalendar
            sidebar={{
                items: {
                    resourceFilter: {
                        selectAllItem: true,
                        minHeight: '22em',
                        store: {
                            // Group resources by a custom `team` field
                            groupers: [
                                { field: 'role', ascending: true }
                            ]
                        },
                    },
                    printEvents: {
                        weight: 300,
                        type: 'button',
                        text: 'Rendez-vous du jour',
                        icon: 'b-fa b-fa-print',

                        // Will look in ownership hierarchy and call on the Calendar
                        listeners: {
                            click: () => {
                                console.log('tototo');
                            },
                        }
                    },
                }
            }}
        />
    );
};


export default Calendar;