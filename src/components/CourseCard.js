import "./CourseCard.css";

function CourseCard({ img, title, desc }) {
  return (
    <div className="course-card">
      <img src={img} alt="" className="courses-img" />
      <div className="card-text-box">
        <p className="course-title">{title}</p>
        <p className="course-description">{desc}</p>
      </div>
    </div>
  );
}

export default CourseCard;
