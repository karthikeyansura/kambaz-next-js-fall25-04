"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const links = [
    { id: "wd-course-home-link", path: "Home", label: "Home" },
    { id: "wd-course-modules-link", path: "Modules", label: "Modules" },
    { id: "wd-course-piazza-link", path: "Piazza", label: "Piazza" },
    { id: "wd-course-zoom-link", path: "Zoom", label: "Zoom" },
    { id: "wd-course-assignments-link", path: "Assignments", label: "Assignments" },
    { id: "wd-course-quizzes-link", path: "Quizzes", label: "Quizzes" },
    { id: "wd-course-grades-link", path: "Grades", label: "Grades" },
    { id: "wd-course-people-link", path: "People/Table", label: "People" },
  ];
  return (
    <div id="wd-courses-navigation" className="list-group wd fs-5 rounded-0" style={{ width: 180 }}>
      {links.map((link) => (
        <Link
          key={link.id}
          href={`/Courses/1234/${link.path}`}
          id={link.id}
          className={`list-group-item border-0 ${
            pathname.includes(link.label) ? "active text-black" : "text-danger"
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
