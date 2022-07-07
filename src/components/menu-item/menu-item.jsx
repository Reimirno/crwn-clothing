import "./menu-item.scss";
import withRouter from "../../utilities/withRouter";

const MenuItem = ({ title, desc, imageUrl, size, router }) => {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => router.navigate("about")}
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
