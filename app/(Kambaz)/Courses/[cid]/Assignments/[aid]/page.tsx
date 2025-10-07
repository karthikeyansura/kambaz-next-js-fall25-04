import {
  Button,
  Col,
  FormControl,
  FormLabel,
  FormSelect,
  FormCheck,
  Row,
  Container,
} from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <Container>
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl
        id="wd-name"
        defaultValue="A1 - ENV + HTML"
        className="mb-3"
      />

      <FormControl
        as="textarea"
        id="wd-description"
        rows={10}
        className="mb-3"
        defaultValue={`The assignment is available online Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.`}
      />

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Points
        </FormLabel>
        <Col sm={10}>
          <FormControl id="wd-points" defaultValue={100} type="number" />
        </Col>
      </Row>

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Assignment Group
        </FormLabel>
        <Col sm={10}>
          <FormSelect id="wd-group">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Display Grade as
        </FormLabel>
        <Col sm={10}>
          <FormSelect id="wd-display-grade-as">
            <option>Percentage</option>
            <option>Points</option>
          </FormSelect>
        </Col>
      </Row>

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Submission Type
        </FormLabel>
        <Col sm={10}>
          <div className="border p-3 rounded">
            <FormSelect id="wd-submission-type" className="mb-3">
              <option>Online</option>
              <option>In-Person</option>
            </FormSelect>

            <div>
              <strong>Online Entry Options</strong>
              <div className="mt-2">
                <FormCheck
                  type="checkbox"
                  id="wd-text-entry"
                  label="Text Entry"
                  className="m-2"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-website-url"
                  label="Website URL"
                  className="m-2"
                  defaultChecked
                />
                <FormCheck
                  type="checkbox"
                  id="wd-media-recordings"
                  label="Media Recordings"
                  className="m-2"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-student-annotation"
                  label="Student Annotation"
                  className="m-2"
                />
                <FormCheck
                  type="checkbox"
                  id="wd-file-upload"
                  label="File Upload"
                  className="m-2"
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Assign
        </FormLabel>
        <Col sm={10}>
          <div className="border p-3 rounded">
            <FormLabel htmlFor="wd-assign-to">
              <strong>Assign to</strong>
            </FormLabel>
            <FormSelect multiple id="wd-assign-to" className="mb-3">
              <option>Everyone</option>
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </FormSelect>

            <FormLabel htmlFor="wd-due-date">
              <strong>Due</strong>
            </FormLabel>
            <FormControl
              type="date"
              id="wd-due-date"
              defaultValue="2023-10-20"
              className="mb-3"
            />

            <Row>
              <Col sm={6}>
                <FormLabel htmlFor="wd-available-from">
                  <strong>Available From</strong>
                </FormLabel>
                <FormControl
                  type="date"
                  id="wd-available-from"
                  defaultValue="2023-10-01"
                />
              </Col>
              <Col sm={6}>
                <FormLabel htmlFor="wd-available-until">
                  <strong>Until</strong>
                </FormLabel>
                <FormControl
                  type="date"
                  id="wd-available-until"
                  defaultValue="2023-10-21"
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <hr />

      <div className="text-end">
        <Button variant="secondary" className="me-2" id="wd-cancel-assignment">
          Cancel
        </Button>
        <Button variant="danger" id="wd-save-assignment">
          Save
        </Button>
      </div>
    </Container>
  );
}
