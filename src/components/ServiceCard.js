import "./ServiceCard.css";

function ServiceCard({ icon, cardTitle, cardDesc }) {
  return (
    <div className="card">
      <div className="service-icon-box">
        <span className="service-icon">{icon}</span>
      </div>
      <p className="card-title">{cardTitle}</p>
      <p className="card-description">{cardDesc}</p>
    </div>
  );
}

export default ServiceCard;
