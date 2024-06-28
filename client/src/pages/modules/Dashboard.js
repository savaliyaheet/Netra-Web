import axios from "axios";
import React, { useEffect, useState } from "react";
import SpinnerLoader from "../../components/overlayAndLoader/SpinnerLoader";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://reqres.in/api/users?delay=3")
      .then((res) => {
        setLoading(false);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) return <SpinnerLoader />;

  return (
    <div>
      {data?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <div key={item.id} className="d-flex align-items-center gap-5">
              <img
                src={item.avatar}
                alt={item.first_name}
                className="profile_img"
              />
              <h5 className="mb-0">
                {item.first_name} {item.last_name}
              </h5>
              <p className="mb-0">{item.email}</p>
              <hr />
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Dashboard;
