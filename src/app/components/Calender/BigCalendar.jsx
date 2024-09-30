"use client";
import React, { useState } from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "../../lib/calendarevent";

export default function BigCalendar(props) {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState(Views.WORK_WEEK);
  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  // const calendarEvents ={title , allDay}
  
  console.table(calendarEvents);
  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleViewChange}
      min={new Date(2024, 1, 0, 8, 0, 0)}
      max={new Date(2024, 1, 0, 17, 0, 0)}
    />
  );
}
