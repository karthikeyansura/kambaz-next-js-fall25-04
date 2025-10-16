"use client";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();
  const { cid } = useParams();
  
  const links = [
    { label: "Home", path: "Home" },
    { label: "Modules", path: "Modules" },
    { label: "Piazza", path: "Piazza" },
    { label: "Zoom", path: "Zoom" },
    { label: "Assignments", path: "Assignments" },
    { label: "Quizzes", path: "Quizzes" },
    { label: "Grades", path: "Grades" },
    { label: "People", path: "People/Table" },
  ];

  return (
    <div id="wd-courses-navigation" style={{ width: 150 }} className="list-group">
      {links.map((link) => (
        <Link
          key={link.label}
          href={`/Courses/${cid}/${link.path}`}
          className={`list-group-item border border-0 ${
            pathname.includes(link.label) ? "active text-black" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
