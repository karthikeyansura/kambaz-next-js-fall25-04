/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useParams } from "next/navigation";
import * as db from "../../../Database";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";

function ModuleControlButtons() {
  return (
    <div className="float-end">
      <FaCheckCircle className="text-success me-2 fs-5" />
      <FaEllipsisV className="fs-5" />
    </div>
  );
}

function LessonControlButtons() {
  return (
    <div className="float-end">
      <FaCheckCircle className="text-success me-2 fs-5" />
      <FaEllipsisV className="fs-5" />
    </div>
  );
}

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-light me-1">Collapse All</button>
        <button className="btn btn-light me-1">View Progress</button>
        <select className="form-select me-1" style={{ width: "auto" }}>
          <option>Publish All</option>
        </select>
        <button className="btn btn-danger">+ Module</button>
      </div>

      <ListGroup id="wd-modules" className="rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <ListGroupItem
              key={module._id}
              className="wd-module p-0 mb-5 fs-5 border-gray"
            >
              <div className="wd-title p-3 ps-2 bg-secondary text-white">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModuleControlButtons />
              </div>

              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroupItem
                      key={lesson._id}
                      className="wd-lesson p-3 ps-1"
                    >
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </ListGroupItem>
                  ))}
                </ListGroup>
              )}
            </ListGroupItem>
          ))}
      </ListGroup>
    </div>
  );
}
