import TabButtons from "./TabButtons";
import SkillTab from "./SkillTab";
import ExperienceTab from "./ExperienceTab";
import CertificationTab from "./CertificationTab";
import EducationTab from "./EducationTab";

import { useState } from "react";

export default function Tab() {
  const [skill, setSkill] = useState(true);
  const [experience, setExperience] = useState(false);
  const [certification, setCertification] = useState(false);
  const [education, setEducation] = useState(false);

  return (
    <>
      <TabButtons
        setCertification={setCertification}
        setEducation={setEducation}
        setExperience={setExperience}
        setSkill={setSkill}
        skill={skill}
        certification={certification}
        education={education}
        experience={experience}
      />
      <div>
        {skill && <SkillTab />}
        {experience && <ExperienceTab />}
        {certification && <CertificationTab />}
        {education && <EducationTab />}
      </div>
    </>
  );
}
