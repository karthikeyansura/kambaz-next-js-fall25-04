import Link from "next/link";
export default function Labs() {
  return (
    <div id="wd-labs">
      <strong>Name: </strong> Sai Karthikeyan Sura
      <br />
      <strong>Course: </strong> CS5610 - Web Development
      <br />
      <strong>Section: </strong> 04
      <br />
      <strong>Source Code: </strong>
      <a href="https://github.com/karthikeyansura/kambaz-next-js-fall25-04">GitHub Repository</a>
      <br />
      <h1>Labs</h1>
      <ul>
        <li>
          <Link href="/Labs/Lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/Labs/Lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
      </ul>
    </div>
  );
}
