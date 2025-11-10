"use client";
import { ReactNode, useState } from "react";
import CourseNavigation from "./Navigation";
import { useSelector } from "react-redux";
import { useParams } from "next/navigation";
import { RootState } from "../../store";
import { FaAlignJustify } from "react-icons/fa6";

export default function CoursesLayout({ children }: { children: ReactNode }) {
  const { cid } = useParams();
  const { courses } = useSelector((state: RootState) => state.coursesReducer);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const course = courses.find((course: any) => course._id === cid);
  const [isNavVisible, setIsNavVisible] = useState(true);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify
          className="me-4 fs-4 mb-1"
          onClick={() => setIsNavVisible(!isNavVisible)}
          style={{ cursor: "pointer" }}
        />
        {course?.name}
      </h2>
      <hr />
      <div className="d-flex">
        {isNavVisible && (
          <div style={{ width: 170 }}>
            <CourseNavigation />
          </div>
        )}
        <div className="flex-fill" style={{ width: "100%" }}>
          {children}
        </div>
      </div>
    </div>
  );
}