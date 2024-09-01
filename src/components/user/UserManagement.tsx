import { useSelector } from "react-redux";
export default function UserManagement() {
  const manageuserData = useSelector(({ user }: any) => user);
  const { manageUser } = manageuserData;
  let { data } = manageUser;

  return (
    <div className="user-profile">
      <div className="avatar">
        <img
          src={data.avatar}
          alt={`${data.first_name} ${data.last_name}`}
        />
      </div>
      <div className="user-info">
        <h2>{`${data.first_name} ${data.last_name}`}</h2>
        <p>Email: {data.email}</p>
      </div>
      <div className="support">
        <p>{data.support.text}</p>
        <a
          href={data.support.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
