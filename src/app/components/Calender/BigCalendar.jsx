"use client";
import React, { useState } from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/app/lib/data";

export default function BigCalendar() {
  const localizer = momentLocalizer(moment);
  const [view, setView] = useState(Views.WORK_WEEK);

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  const styles = {
    calendar: {
      height: "98%",
    },
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
      style={styles.calendar} // Using styles object for height
      onView={handleViewChange}
      min={new Date(2024, 7, 12, 8, 0, 0)} // 8 AM
      max={new Date(2024, 7, 12, 18, 0, 0)} // 6 PM
    />
  );
}
