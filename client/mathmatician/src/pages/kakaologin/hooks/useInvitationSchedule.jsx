import { useState, useEffect } from "react";

const useInvitationSchedule = () => {
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    const req_url = "http://127.0.0.1:4000/schedule";

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