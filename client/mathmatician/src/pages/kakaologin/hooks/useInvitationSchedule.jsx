import { useState, useEffect } from "react";

const useInvitationSchedule = () => {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const req_url = "https://api.mathnight.site/calendar";

    fetch(req_url)
      .then(res => res.json())
      .then(data => {
        setSchedule(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return schedule; 
}

export default useInvitationSchedule;