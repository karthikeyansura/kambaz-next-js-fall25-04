import Link from "next/link";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      &nbsp;
      <button id="wd-add-assignment-group">+ Group</button>
      &nbsp;
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/123"
            className="wd-assignment-link"
          >
            A1 - ENV + HTML
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> Sep 6 at
          12:00am | <strong>Due:</strong> Sep 10 at 11:59pm | 100 pts
        </li>
        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/234"
            className="wd-assignment-link"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> Sep 13 at
          12:00am | <strong>Due:</strong> Sep 17 at 11:59pm | 100 pts
        </li>

        <li className="wd-assignment-list-item">
          <Link
            href="/Courses/1234/Assignments/345"
            className="wd-assignment-link"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <br />
          Multiple Modules | <strong>Not available until</strong> Sep 20 at
          12:00am | <strong>Due:</strong> Sep 24 at 11:59pm | 100 pts
        </li>
      </ul>
    </div>
  );
}