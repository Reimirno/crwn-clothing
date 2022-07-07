import "./menu-item.scss";
import withRouter from "../../utilities/withRouter";

const MenuItem = ({ title, desc, imageUrl, size, router, linkUrl }) => {
  console.log(router);
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => router.navigate(`${router.location.pathname}${linkUrl}`)}
    >
      <div
        className="menu-img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="menu-content">
        <h1 className="menu-title">{title.toUpperCase()}</h1>
        <span className="menu-desc">{desc}</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
