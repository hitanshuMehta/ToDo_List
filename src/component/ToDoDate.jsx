import React, { useEffect, useState } from "react";

const ToDoDate = () => {
  const [dateTime, SetdateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();
      const formattedTime = now.toLocaleTimeString();
      SetdateTime(`${formattedDate} - ${formattedTime}`);
    };

    // Call immediately
    updateDateTime();

    // Then start interval
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};

export default ToDoDate;
