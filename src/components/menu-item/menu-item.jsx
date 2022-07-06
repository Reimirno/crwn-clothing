import "./menu-item.scss";

const MenuItem = ({ title, desc, imgUrl, size }) => (
  <div className={`menu-item ${size}`}>
    <div
      className="menu-img"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    />
    <div className="menu-content">
      <h1 className="menu-title">{title.toUpperCase()}</h1>
      <span className="menu-desc">{desc}</span>
    </div>
  </div>
);

export default MenuItem;
