/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import PeopleTable from "../../Courses/[cid]/People/Table/page";
import PeopleDetails from "../../Courses/[cid]/People/Details";
import * as client from "../client";
import { FormSelect, FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function Users() {
  const [users, setUsers] = useState<any[]>([]);
  const { uid } = useParams();
  const [role, setRole] = useState("");
  const [name, setName] = useState("");

  const fetchUsers = async () => {
    try {
      const users = await client.findAllUsers();
      setUsers(users);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const filterUsersByRole = async (role: string) => {
    setRole(role);
    if (role) {
      const users = await client.findUsersByRole(role);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const filterUsersByName = async (name: string) => {
    setName(name);
    if (name) {
      const users = await client.findUsersByPartialName(name);
      setUsers(users);
    } else {
      fetchUsers();
    }
  };

  const createUser = async () => {
    try {
      const user = await client.createUser({
        firstName: "New",
        lastName: `User${users.length + 1}`,
        username: `newuser${Date.now()}`,
        password: "password123",
        email: `User${users.length + 1}@email.com`,
        section: "S101",
        role: "STUDENT",
      });
      setUsers([...users, user]);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [uid]);

  return (
    <div className="ms-4">
      <h3>Users</h3>
      <button
        onClick={createUser}
        className="float-end btn btn-danger wd-add-people"
      >
        <FaPlus className="me-2" />
        Users
      </button>
      {uid && <PeopleDetails />}
      <div className="d-flex gap-2 mb-3">
        <FormControl
          onChange={(e) => filterUsersByName(e.target.value)}
          placeholder="Search people"
          className="w-25 wd-filter-by-name"
        />
        <FormSelect
          value={role}
          onChange={(e) => filterUsersByRole(e.target.value)}
          className="w-25 wd-select-role"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Students</option>
          <option value="TA">Assistants</option>
          <option value="FACULTY">Faculty</option>
          <option value="ADMIN">Administrators</option>
        </FormSelect>
      </div>
      <PeopleTable users={users} />
    </div>
  );
}
