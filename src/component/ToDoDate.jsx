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

    updateDateTime();

    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h2 className="date-time">{dateTime}</h2>;
};

export default ToDoDate;
