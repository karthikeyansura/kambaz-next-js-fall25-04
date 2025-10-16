"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function Breadcrumb({
  course,
}: {
  course: { name: string } | undefined;
}) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const currentPage = decodeURIComponent(pathParts[pathParts.length - 1]);

  return (
    <span className="text-danger">
      <FaAlignJustify className="me-4 fs-4 mb-1" />
      {course?.name} &gt; {currentPage}
    </span>
  );
}
