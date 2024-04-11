import React from "react";
import Smileman from "@components/Smileman/Smileman";
import CourseCard from "@components/CourseCard/CourseCard";
import { CONSTANTS } from "@utils/constants";
import s from "./Courses.module.css";

const Courses = () => (
  <main className={s.main}>
    <div className={s.construct}>
      <CourseCard
        type="construct"
        options={CONSTANTS.courseConstruct}
      />
    </div>
    <div className={s.operatorView}>
      <CourseCard
        type="operator"
        options={CONSTANTS.courseOperator}
      />
    </div>
    <Smileman />
  </main>
);

export default Courses;
