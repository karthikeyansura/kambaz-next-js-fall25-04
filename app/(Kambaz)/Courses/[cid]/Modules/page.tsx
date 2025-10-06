"use client";
import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import ModulesControls from "./ModulesControls";

export default function Modules() {
  return (
    <div>
      <ModulesControls />
      <br /><br /><br />
      <ListGroup as="ul" className="rounded-0" id="wd-modules">
        <ListGroup.Item as="li" className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 1
            <ModuleControlButtons />
          </div>
          <ListGroup as="ul" className="wd-lessons rounded-0">
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-5">
              <BsGripVertical className="me-2 fs-3" />
              LEARNING OBJECTIVES
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-5">
              <BsGripVertical className="me-2 fs-3" />
              Introduction to the course
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-5">
              <BsGripVertical className="me-2 fs-3" />
              Learn what is Web Development
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item as="li" className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 2
            <ModuleControlButtons />
          </div>
          <ListGroup as="ul" className="wd-lessons rounded-0">
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-4">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-4">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-4">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 3
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        <ListGroup.Item as="li" className="wd-module p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            Week 3
            <ModuleControlButtons />
          </div>
          <ListGroup as="ul" className="wd-lessons rounded-0">
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-4">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 1
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-4">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 2
              <LessonControlButtons />
            </ListGroup.Item>
            <ListGroup.Item as="li" className="wd-lesson p-3 ps-4">
              <BsGripVertical className="me-2 fs-3" />
              LESSON 3
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
