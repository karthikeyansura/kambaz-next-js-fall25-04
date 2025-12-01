"use client";

import { useParams, useRouter } from "next/navigation";
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

import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment, setAssignments } from "../reducer";
import { useState, useEffect } from "react";
import * as client from "../../../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { assignments } = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.assignmentsReducer
  );

  useEffect(() => {
    const fetchAssignments = async () => {
      if (assignments.length === 0 && cid) {
        const fetchedAssignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(fetchedAssignments));
      }
    };
    fetchAssignments();
  }, [cid, assignments.length, dispatch]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const assignment = assignments.find((a: any) => a._id === aid);
  const isNewAssignment = aid === "new" || !assignment;

  const { currentUser } = useSelector(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (state: any) => state.accountReducer
  );
  const viewMode = currentUser?.role === "STUDENT";

  const [assignmentState, setAssignmentState] = useState(
    assignment || {
      title: "New Assignment",
      description: "New Assignment Description",
      points: 100,
      course: cid,
      availableDate: new Date().toISOString().split("T")[0],
      dueDate: new Date().toISOString().split("T")[0],
      availableUntil: new Date().toISOString().split("T")[0],
    }
  );

  useEffect(() => {
    if (assignment) {
      setAssignmentState(assignment);
    }
  }, [assignment]);

  const onCreateAssignmentForCourse = async () => {
    const newAssignment = await client.createAssignmentForCourse(
      cid as string,
      assignmentState
    );
    dispatch(addAssignment(newAssignment));
    router.push(`/Courses/${cid}/Assignments`);
  };

  const onUpdateAssignment = async () => {
    await client.updateAssignment(assignmentState);
    dispatch(updateAssignment(assignmentState));
    router.push(`/Courses/${cid}/Assignments`);
  };

  return (
    <Container id="wd-assignments-editor">
      <FormLabel htmlFor="wd-name">Assignment Name</FormLabel>
      <FormControl
        id="wd-name"
        value={assignmentState.title || ""}
        className="mb-3"
        onChange={(e) =>
          setAssignmentState({ ...assignmentState, title: e.target.value })
        }
      />

      <FormControl
        as="textarea"
        id="wd-description"
        rows={5}
        className="mb-3"
        value={assignmentState.description || ""}
        onChange={(e) =>
          setAssignmentState({
            ...assignmentState,
            description: e.target.value,
          })
        }
      />

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Points
        </FormLabel>
        <Col sm={10}>
          <FormControl
            id="wd-points"
            value={assignmentState.points || 100}
            type="number"
            onChange={(e) =>
              setAssignmentState({
                ...assignmentState,
                points: Number(e.target.value),
              })
            }
          />
        </Col>
      </Row>

      {viewMode && (
        <>
          <Row className="mb-3">
            <FormLabel column sm={2} className="wd-assignment-details-label">
              Assignment Group
            </FormLabel>
            <Col sm={10}>
              <FormSelect id="wd-group" defaultValue="ASSIGNMENTS">
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
        </>
      )}

      <Row className="mb-3">
        <FormLabel column sm={2} className="wd-assignment-details-label">
          Assign
        </FormLabel>
        <Col sm={10}>
          <div className="border p-3 rounded">
            {viewMode && (
              <>
                <FormLabel htmlFor="wd-assign-to">
                  <strong>Assign to</strong>
                </FormLabel>
                <FormSelect multiple id="wd-assign-to" className="mb-3">
                  <option>Everyone</option>
                  <option>Group 1</option>
                  <option>Group 2</option>
                  <option>Group 3</option>
                </FormSelect>
              </>
            )}

            <FormLabel htmlFor="wd-due-date">
              <strong>Due</strong>
            </FormLabel>
            <FormControl
              type="date"
              id="wd-due-date"
              value={assignmentState.dueDate?.split("T")[0] || ""}
              className="mb-3"
              onChange={(e) =>
                setAssignmentState({
                  ...assignmentState,
                  dueDate: e.target.value,
                })
              }
            />

            <Row>
              <Col sm={6}>
                <FormLabel htmlFor="wd-available-from">
                  <strong>Available From</strong>
                </FormLabel>
                <FormControl
                  type="date"
                  id="wd-available-from"
                  value={assignmentState.availableDate?.split("T")[0] || ""}
                  onChange={(e) =>
                    setAssignmentState({
                      ...assignmentState,
                      availableDate: e.target.value,
                    })
                  }
                />
              </Col>
              <Col sm={6}>
                <FormLabel htmlFor="wd-available-until">
                  <strong>Until</strong>
                </FormLabel>
                <FormControl
                  type="date"
                  id="wd-available-until"
                  value={assignmentState.availableUntil?.split("T")[0] || ""}
                  onChange={(e) =>
                    setAssignmentState({
                      ...assignmentState,
                      availableUntil: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <hr />

      {!viewMode && (
        <div className="text-end">
          <Button
            variant="secondary"
            className="me-2"
            id="wd-cancel-assignment"
            onClick={() => router.push(`/Courses/${cid}/Assignments`)}
          >
            Cancel
          </Button>
          {isNewAssignment ? (
            <Button
              variant="danger"
              id="wd-add-assignment"
              onClick={onCreateAssignmentForCourse}
            >
              Add
            </Button>
          ) : (
            <Button
              variant="danger"
              id="wd-save-assignment"
              onClick={onUpdateAssignment}
            >
              Save
            </Button>
          )}
        </div>
      )}
    </Container>
  );
}
