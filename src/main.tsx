import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';

const Calendar = lazy(() => import('./Calendar'));


import '@bryntum/calendar/calendar.stockholm.css';

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <Calendar />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root')
);
