import "./menu-item.scss";

const MenuItem = ({ title, desc, imageUrl, size }) => {
  console.log(imageUrl);
  return (
    <div className={`menu-item ${size}`}>
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

export default MenuItem;
