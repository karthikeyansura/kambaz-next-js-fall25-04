"use client";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useParams, useRouter } from "next/navigation";
import * as client from "@/app/(Kambaz)/Account/client";
import PeopleTable from "../Table/page";

export default function PeopleWithDetails() {
  const { cid, uid } = useParams();
  const router = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  const fetchUser = async () => {
    if (!uid) return;
    const userData = await client.findUserById(uid as string);
    setUser(userData);
  };

  useEffect(() => {
    if (uid) fetchUser();
  }, [uid]);

  const handleClose = () => {
    router.push(`/Courses/${cid}/People/Table`);
  };

  return (
    <div className="position-relative">
      <PeopleTable />
      
      {user && (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
          <button
            onClick={handleClose}
            className="btn position-fixed end-0 top-0 wd-close-details"
          >
            <IoCloseSharp className="fs-1" />
          </button>
          <div className="text-center mt-2">
            <FaUserCircle className="text-secondary me-2 fs-1" />
          </div>
          <hr />
          <div className="text-danger fs-4 wd-name">
            {user.firstName} {user.lastName}
          </div>

          <b>Roles:</b>
          <span className="wd-roles"> {user.role} </span>
          <br />

          <b>Login ID:</b> <span className="wd-login-id"> {user.loginId} </span> <br />
          <b>Section:</b> <span className="wd-section"> {user.section} </span> <br />
          <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span> <br />
          <b>Email:</b> <span className="wd-email"> {user.email} </span>
        </div>
      )}
    </div>
  );
}
