// "use client";
// import React, { useState } from "react";
// import 'react-big-calendar/lib/css/react-big-calendar.css'
// import { Calendar, momentLocalizer, Views } from "react-big-calendar";
// import moment from "moment";
// import { calendarEvents } from "@/app/lib/data";

// export default function BigCalendar() {
//   const localizer = momentLocalizer(moment);
//   const [view, setView] = useState(Views.WORK_WEEK);
//   const handleViewChange = (selectedView) => {
//     setView(selectedView);
//   };

//   // const calendarEvents ={title , allDay}
  
//   console.log(calendarEvents);
//   return (
//     <Calendar
//       localizer={localizer}
//       events={calendarEvents}
//       startAccessor="start"
//       endAccessor="end"
//       views={["work_week", "day"]}
//       view={view}
//       style={{ height: "98%" }}
//       onView={handleViewChange}
//       min={new Date(2024, 1, 0, 8, 0, 0)}
//       max={new Date(2024, 1, 0, 17, 0, 0)}
//     />
//   );
// }


"use client";
import React, { useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/app/lib/data";

export default function BigCalendar() {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState(Views.WORK_WEEK);
  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day", "week"]}
      view={view}
      defaultDate={new Date(2024, 7, 12)} // Set the calendar to start on August 12, 2024
      style={{ height: "98%" }}
      onView={handleViewChange}
      min={new Date(2024, 7, 12, 6, 0, 0)} // 6 AM
      max={new Date(2024, 7, 12, 18, 0, 0)} // 6 PM
    />
  );
}
