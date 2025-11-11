"use client";
import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { FiTarget } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { IoBarChart, IoNotificationsOutline } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { useSelector } from "react-redux";

export default function CourseStatus() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const studentView = currentUser.role === "STUDENT";
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      {!studentView && (
        <>
          <div className="d-flex">
            <div className="w-50 pe-1">
              <Button
                variant="secondary"
                size="lg"
                className="w-100 text-nowrap "
              >
                <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
              </Button>
            </div>
            <div className="w-50">
              <Button variant="success" size="lg" className="w-100">
                <FaCheckCircle className="me-2 fs-5" /> Publish
              </Button>
            </div>
          </div>
          <br />
          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-1 text-start"
          >
            <BiImport className="me-2 fs-5" /> Import Existing Content
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-1 text-start"
          >
            <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-1 text-start"
          >
            <FiTarget className="me-2 fs-5" /> Choose Home Page
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-1 text-start"
          >
            <IoBarChart className="me-2 fs-5" /> View Course Stream
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-1 text-start"
          >
            <HiOutlineSpeakerphone className="me-2 fs-5" /> New Announcement
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 mt-1 text-start"
          >
            <FaChartColumn className="me-2 fs-5" /> New Analytics
          </Button>
        </>
      )}
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoNotificationsOutline className="me-2 fs-5" /> View Course
        Notifications
      </Button>
    </div>
  );
}
