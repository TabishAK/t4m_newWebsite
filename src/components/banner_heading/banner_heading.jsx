import { Container } from "react-bootstrap";
import LearnMore from "../buttons/learn_more";
import "./banner_heading.scss";
import Fade from "react-reveal/Fade";

const BannerHeading = (props) => {
  return (
    <Container className="headings">
      {props.conf.page === 1 ? (
        // <Fade bottom delay={400}>
        <h1 className="page-1">
          <span className="something-1">
            We Build <span className="creative">Creative</span>{" "}
            <span className="outstanding">Outstanding</span>{" "}
            <span className="compaigns">Campaigns</span>
          </span>{" "}
        </h1>
      ) : // </Fade>
      // <span className="something-1">
      //   {/* <Fade bottom delay={1200} duration={300}> */}
      //   <div className="first-one">
      //     <h1 className="we-build">We Build </h1>
      //     <h1 className="creative ">Creative</h1>
      //   </div>
      //   {/* </Fade> */}
      //   {/* <Fade bottom delay={1200} duration={300}> */}
      //   <div className="second-one">
      //     <h1 className="outstanding">Outstanding </h1>
      //     <h1 className="compaigns">Campaigns.</h1>
      //   </div>
      //   {/* </Fade> */}
      // </span>
      props.conf.page === 2 ? (
        <h1 className="page-2">
          <span className="something-2">
            {/* <Fade bottom delay={600}> */}
            Get your
            {/* </Fade> */}
            <br />
            {/* <Fade bottom delay={600}> */}
            Swift ride
            {/* </Fade> */}
            <br />
            {/* <Fade bottom delay={600}> */}
            <span className="success" style={{ color: "#f2782a" }}>
              to Success
            </span>
            {/* </Fade> */}
          </span>
        </h1>
      ) : props.conf.page === 3 ? (
        <h1 className="page-3">
          <span className="somthing-3">
            {/* <Fade bottom delay={1000}> */}
            We have {/* </Fade> */}
            {/* <Fade bottom delay={1100}> */}
            {""} the <br /> Bucket fill <br />
            {/* </Fade>{" "} */}
            {/* <Fade bottom delay={1200}> */}
            <span className="ideas"> with Ideas</span>
            {/* </Fade> */}
          </span>
        </h1>
      ) : props.conf.page === 4 ? (
        // <Fade bottom delay={1200}>
        <h1 className="page-4">
          <span className="something-4">
            <span className="reach">Reach</span> us out
          </span>
        </h1>
      ) : (
        // </Fade>
        ""
      )}

      {props.conf.isButton ? (
        // <Fade bottom delay={1200}>
        <LearnMore class="btn btn-sm btn-learn-more" />
      ) : (
        // </Fade>
        ""
      )}
    </Container>
  );
};

export default BannerHeading;
