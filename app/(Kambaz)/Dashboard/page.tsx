"use client";
import { useState } from "react";
import Link from "next/link";
import * as db from "../Database";
import { Row, Col, Card, Button, FormControl } from "react-bootstrap";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

export default function Dashboard() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [courses, setCourses] = useState<any[]>(db.courses);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse ]);
  }; 
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={addNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={updateCourse} id="wd-update-course-click">
          Update </button>  
      </h5><br />
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <FormControl as="textarea" value={course.description} rows={3}
        onChange={(e) => setCourse({ ...course, description: e.target.value }) } />
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col
              key={course._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  href={`/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    as={Image}
                    src={course.image}
                    variant="top"
                    width={300}
                    height={160}
                    alt={course.name}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                    <Button onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }} className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                      Delete
                    </Button>                    
                    <Button id="wd-edit-course-click"
                      onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-warning me-2 float-end" >
                      Edit
                    </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
