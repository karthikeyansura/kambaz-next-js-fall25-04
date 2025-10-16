import { ReactNode } from "react";
import CourseNavigation from "./Navigation";
import { courses } from "../../Database";
import Breadcrumb from "./Breadcrumb";

export default async function CoursesLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Promise<{ cid: string }> }>) {
  const { cid } = await params;
  const course = courses.find((course) => course._id === cid);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <Breadcrumb course={course} />
      </h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top" style={{ width: 170 }}>
              <CourseNavigation />
            </td>
            <td valign="top" style={{ width: "100%" }}>
              {children}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
