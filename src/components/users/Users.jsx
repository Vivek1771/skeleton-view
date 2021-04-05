import React, { useEffect, useState } from "react";
import axios from "axios";
import "./styles.css";
import Skeleton from "react-loading-skeleton";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsersData = async () => {
    return setTimeout(async () => {
      const res = await axios.get("http://jsonplaceholder.typicode.com/users");
      //console.log(res.data)
      const users = res.data.slice(0, 5);
      setUsers(users);
      setLoading(false);
    }, 5000);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  if (loading) {
    return (
      <>
        <div className="usercard">
          <div className="cards">
            <Skeleton height={20} count={4} /> <Skeleton height={100} />
          </div>
        </div>
        <div className="usercard">
          <div className="cards">
            <Skeleton count={4} /> <Skeleton height={100} />
          </div>
        </div>
        <div className="usercard">
          <div className="cards">
            <Skeleton count={4} /> <Skeleton height={100} />
          </div>
        </div>
        <div className="usercard">
          <div className="cards">
            <Skeleton count={4} /> <Skeleton height={100} />
          </div>
        </div>
        <div className="usercard">
          <div className="cards">
            <Skeleton count={4} /> <Skeleton height={100} />
          </div>
        </div>
      </>
    );
  }
  return (
    <div>
      <div className="usercard">
        {users.map((u) => (
          <div key={u.id} className="cards">
            <h3>{u.name}</h3>
            <p>{u.username}</p>
            <p>{u.email}</p>
            <p>{u.website}</p>
            <p>
              jhdohiaapdfpjadsjfjsfjojapodjfasjdohsffiiasdhofh
              ksndfioasoijfojaspdjfpaskdfdoasdkkapsjg
              ndkdfnpasndpifpijaspdjfpapdfnjhfohdoiahsfdihasdf
              ifdojasifjpajspodfjpoasjddfcmvlkjhfu9yarhksdf
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
