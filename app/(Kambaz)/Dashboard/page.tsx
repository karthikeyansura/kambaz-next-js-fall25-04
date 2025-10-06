"use client";
import { Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Dashboard() {
  const courses = [
    { id: "1234", name: "CS1234 React JS", description: "Full Stack software developer", image: "reactjs.jpg" },
    { id: "2345", name: "CS2345 PDP", description: "Programming Design Paradigm", image: "pdp.jpg" },
    { id: "3456", name: "CS3456 MLOPS", description: "Machine Learning Operations", image: "mlops.jpg" },
    { id: "4567", name: "CS4567 AI", description: "Artificial Intelligence", image: "ai.jpg" },
    { id: "5678", name: "CS5678 Go Lang", description: "GoLang and Microservices", image: "golang.jpg" },
    { id: "6789", name: "CS6789 DBMS", description: "Database Management Systems", image: "dbms.jpg" },
    { id: "7890", name: "CS7890 CS", description: "Computer Systems", image: "compsystems.jpg" },
    { id: "8901", name: "CS8901 Cloud Computing", description: "Cloud Computing Concepts", image: "cloudcomp.jpg" },
    { id: "9012", name: "CS9012 PM", description: "Project Management", image: "projectmgmt.jpg" },
    { id: "1345", name: "CS1345 BSDS", description: "Building Scalable Distributed Systems", image: "bsds.jpg" },
  ];

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-4">
          {courses.map((course) => (
            <Col key={course.id}>
              <Card className="h-100">
                <Link href={`/Courses/${course.id}/Home`} className="text-decoration-none">
                  <Image
                    src={`/images/${course.image}`}
                    className="card-img-top"
                    width={300}
                    height={150}
                    alt={course.name}
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title className="text-primary text-truncate">
                      {course.name}
                    </Card.Title>
                    <Card.Text className="text-muted" style={{ height: "50px", overflow: "hidden" }}>
                      {course.description}
                    </Card.Text>
                    <Button variant="primary" className="w-100">Go</Button>
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
