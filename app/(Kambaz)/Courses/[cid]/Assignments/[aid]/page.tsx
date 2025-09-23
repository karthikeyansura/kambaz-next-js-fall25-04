export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        rows={4}
        cols={50}
        defaultValue="
        The assignment is available online Submit a link to the landing page of
      "
      />
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} type="number" />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
              <option>QUIZZES</option>
              <option>EXAMS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percentage</option>
              <option>Points</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
              <option>In-Person</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-online-entry-options">
              Online Entry Options:
            </label>
            <br />
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            Assign
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to:</label>
            <br />
            <select id="wd-assign-to">
              <option selected>Everyone</option>
              <option>Group 1</option>
              <option>Group 2</option>
              <option>Group 3</option>
            </select>
            <br />
            <br />
            <label htmlFor="wd-due-date">Due Date</label>
            <br />
            <input type="date" id="wd-due-date" defaultValue="2023-10-20" />
            <br />
            <br />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available From</label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-from"
                    defaultValue="2023-10-01"
                  />
                </td>
                <td>
                  <label htmlFor="wd-available-until">Until</label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-until"
                    defaultValue="2023-10-21"
                  />
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td colSpan={2}>
            <hr />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top" colSpan={2}>
            <button id="wd-cancel-assignment">Cancel</button>
            &nbsp;
            <button id="wd-save-assignment">Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}