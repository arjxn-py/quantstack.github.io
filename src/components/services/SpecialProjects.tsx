import styles from "./styles.module.css";
import SpecialProjectsMD from "./descriptions/SpecialProjects.md";
import { useEffect, useState } from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";
import ThemedImage from "@theme/ThemedImage";
/*import SpecialProjectsIllustration from "/img/illustrations/special-projects-light.svg";*/

const breakpointValue: number = 996;

export function SpecialProjectsIllustration() {
  return (
    <ThemedImage
      alt={
        "Picture showing an illustration of a group of people working together in an office."
      }
      sources={{
        light: useBaseUrl("/img/illustrations/special-projects-light.svg"),
        dark: useBaseUrl("/img/illustrations/special-projects-dark.svg"),
      }}
    />
  );
}

export function SpecialProjectsDesktop() {
  return (
    <div className="main-container-with-margins">
      <div className={"container" + " " + styles.service_container}>
        <div className="row">
          <div className="col col--4 col--offset-2">
            <h2>Special projects</h2>
            <SpecialProjectsMD />
          </div>
          <div className="col col--5">
            <SpecialProjectsIllustration />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SpecialProjectsMobile() {
  return (
    <div className={"container" + " " + styles.service_container}>
      <div className="row row--no-gutters">
        <div className="col">
          <div className="flex-full-centered">
            <SpecialProjectsIllustration />
          </div>
        </div>
      </div>
      <div className="row row--no-gutters">
        <div className="col">
          <h2 className={styles.services_title}>Special projects</h2>
          <div className={styles.services_description}>
            <SpecialProjectsMD />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SpecialProjects() {
  const [isDesktop, setDesktop] = useState(window.innerWidth > breakpointValue);

  const updateMedia = () => {
    setDesktop(window.innerWidth > breakpointValue);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div>
      <div className={styles.all_projects_container}>
        {isDesktop ? <SpecialProjectsDesktop /> : <SpecialProjectsMobile />}
      </div>
    </div>
  );
}
