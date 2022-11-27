import "./Service.css";
import ServiceCard from "./ServiceCard";
import {
  FaDesktop,
  FaPalette,
  FaAndroid,
  FaHeadset,
  FaRobot,
  FaLaptopCode,
} from "react-icons/fa";

function Service() {
  return (
    <div className="section-service">
      <div className="container">
        <p className="sub-heading">Services</p>
        <h2 className="secondary-heading">
          We offer a wide range of services.
        </h2>
        <div className="service-card-box grid grid--col--3 ">
          <ServiceCard
            icon={<FaDesktop />}
            cardTitle="Web Application"
            cardDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          corrupti? Incidunt consequatur perspiciatis assumenda reiciendis
          debitis, voluptate cum neque sint itaque quaerat, distinctio ad?
          Facere quae nesciunt molestiae aliquid dolorum?"
          />

          <ServiceCard
            icon={<FaPalette />}
            cardTitle="UI/UX-Design"
            cardDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          corrupti? Incidunt consequatur perspiciatis assumenda reiciendis
          debitis, voluptate cum neque sint itaque quaerat, distinctio ad?
          Facere quae nesciunt molestiae aliquid dolorum?"
          />

          <ServiceCard
            icon={<FaAndroid />}
            cardTitle="Android Application"
            cardDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          corrupti? Incidunt consequatur perspiciatis assumenda reiciendis
          debitis, voluptate cum neque sint itaque quaerat, distinctio ad?
          Facere quae nesciunt molestiae aliquid dolorum?"
          />

          <ServiceCard
            icon={<FaHeadset />}
            cardTitle="Maintenance & Support"
            cardDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          corrupti? Incidunt consequatur perspiciatis assumenda reiciendis
          debitis, voluptate cum neque sint itaque quaerat, distinctio ad?
          Facere quae nesciunt molestiae aliquid dolorum?"
          />

          <ServiceCard
            icon={<FaLaptopCode />}
            cardTitle="WordPress Development"
            cardDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          corrupti? Incidunt consequatur perspiciatis assumenda reiciendis
          debitis, voluptate cum neque sint itaque quaerat, distinctio ad?
          Facere quae nesciunt molestiae aliquid dolorum?"
          />

          <ServiceCard
            icon={<FaRobot />}
            cardTitle="Telegram Bot"
            cardDesc=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          corrupti? Incidunt consequatur perspiciatis assumenda reiciendis
          debitis, voluptate cum neque sint itaque quaerat, distinctio ad?
          Facere quae nesciunt molestiae aliquid dolorum?"
          />
        </div>
      </div>
    </div>
  );
}

export default Service;
