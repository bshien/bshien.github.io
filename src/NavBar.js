import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Skills from "./Skills";
import Projects from "./Projects";
import WorkExperience from "./WorkExperience";
import Contact from "./Contact";
// import Button from "react-bootstrap/Button";

{
  /* <Button>Test Button</Button>; */
}

function handleProgressBar(key, setBar) {
  if (key === "home") {
    setBar(20);
  } else if (key === "skills") {
    setBar(40);
  } else if (key === "projects") {
    setBar(60);
  } else if (key === "work-experience") {
    setBar(80);
  } else if (key === "contact") {
    setBar(100);
  }
}

function NavBar(props) {
  return (
    <Tabs
      defaultActiveKey="home"
      id="uncontrolled-tab"
      onSelect={(k) => handleProgressBar(k, props.changeProg)}
      className="mt-3 mb-3 justify-content-center"
    >
      <Tab className="text-center" eventKey="home" title="About">
        <p>Hi, I'm Brandon Shien.</p>
        <p>
          I'm currently a junior attending University of California, Santa Cruz
          with a major in Computer Science B.S.
        </p>
        <p>I've been coding for 4 years, click on the tabs to learn more!</p>
      </Tab>
      <Tab eventKey="skills" title="Skills">
        <Skills />
      </Tab>
      <Tab eventKey="projects" title="Projects">
        <Projects />
      </Tab>
      <Tab eventKey="work-experience" title="Work Experience">
        <WorkExperience />
      </Tab>
      <Tab eventKey="contact" title="Contact">
        <Contact />
      </Tab>
    </Tabs>
  );
}
export default NavBar;
