/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Container, Table } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import * as courseClient from "../../../client";

interface PeopleTableProps {
  users?: any[];
}

export default function PeopleTable({ users: propUsers }: PeopleTableProps) {
  const { cid } = useParams();
  const [users, setUsers] = useState<any[]>(propUsers || []);

  const fetchUsersForCourse = async () => {
    if (cid && !propUsers) {
      try {
        const fetchedUsers = await courseClient.findUsersForCourse(cid as string);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users for course:", error);
      }
    }
  };

  useEffect(() => {
    if (propUsers) {
      setUsers(propUsers);
    } else if (cid) {
      fetchUsersForCourse();
    }
  }, [cid, propUsers]);

  return (
    <Container id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0 ? (
            users.map((user: any) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <Link
                    href={`/Account/Users/${user._id}`}
                    className="text-decoration-none text-danger"
                  >
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">{user.firstName} </span>
                    <span className="wd-last-name">{user.lastName}</span>
                  </Link>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">
                  {user.lastActivity ? user.lastActivity.split("T")[0] : ""}
                </td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="text-center text-muted">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
