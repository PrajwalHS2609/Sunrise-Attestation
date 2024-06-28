import "./WhyBlock.css";
import WhyBlockCard from "./WhyBlockCard";
import quality from "./../../vid&img/quality.png";

const WhyBlockMain = () => {
  return (
    <div className="whyBlockMainContainer">
      <WhyBlockCard img={quality} txt="16 YEARS OF EXPERIENCE" />
      <WhyBlockCard img={quality} txt="MORE THAN 4LAKH+ DOCUMENTS PROCESSED" />
      <WhyBlockCard img={quality} txt="GOVT APPROVED AND ISO CERTIFIED" />
      <WhyBlockCard img={quality} txt="TRUSTED BY MORE THAN 25000+ CUSTOMERS" />
    </div>
  );
};

export default WhyBlockMain;
