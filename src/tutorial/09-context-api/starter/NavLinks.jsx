import UserContainer from "./UserContainer";

const NavLinks = ({ user, logout }) => {
  return (
    <div>
      <ul className="d-flex ">
        <li class="nav-item m-3">
          <a class="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li class="nav-item  m-3">
          <a class="nav-link" href="#">
            Link
          </a>
        </li>
        <UserContainer user={user} logout={logout} />
      </ul>
    </div>
  );
};

export default NavLinks;
