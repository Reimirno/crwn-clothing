import "./menu-item.scss";

const MenuItem = ({ title, desc, imgUrl, size }) => (
  <div
    style={{
      backgroundImage: `url(${imgUrl})`,
    }}
    className={`menu-item ${size}`}
  >
    <div className="menu-content">
      <h1 className="menu-title">{title}</h1>
      <span className="menu-desc">{desc}</span>
    </div>
  </div>
);

export default MenuItem;
