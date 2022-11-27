import CourseCard from "./CourseCard";
import "./CourseSection.css";
function CourseSection() {
  return (
    <div className="section-course">
      <div className="container">
        <p className="sub-heading">COURSES</p>
        <h2 className="secondary-heading">
          Expand your career opportunities by learning.
        </h2>
        <div className="course-cards">
          <CourseCard
            img="image/courses/html&css.png"
            title="HTML and CSS"
            desc=" Learn modern HTML5, CSS3 and web design by building a stunning website
          for your portfolio! Includes flexbox and CSS Grid."
          />

          <CourseCard
            img="https://img-c.udemycdn.com/course/240x135/1518026_77fb_4.jpg"
            title="JavaScript"
            desc="The modern JavaScript course for everyone! Master JavaScript with projects, challenges."
          />

          <CourseCard
            img="https://img-c.udemycdn.com/course/240x135/4284624_0505_4.jpg"
            title=" Vue - The Complete Guide"
            desc="Ultimate guide to Vue 3 Development! Build large scale applications and deploy to production."
          />

          <CourseCard
            img="https://img-c.udemycdn.com/course/240x135/2018828_41a9_3.jpg"
            title="React - The Complete Guide"
            desc=" Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Routing, Animations, Next.js and way more!"
          />

          <CourseCard
            img="image/courses/node.png"
            title="NodeJS - The Complete Guide"
            desc="Master Node by building a real-world RESTful API and web app."
          />

          <CourseCard
            img="https://img-c.udemycdn.com/course/240x135/2053219_e620_2.jpg"
            title="NestJS Zero to Hero"
            desc="Develop and deploy enterprise back-end applications following best practices using Node.js."
          />
        </div>

        <div className="all-courses-box">
          <a href="#" className="all-courses">
            See all courses &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default CourseSection;
