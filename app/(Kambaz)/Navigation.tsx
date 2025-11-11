"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCalendarAlt, FaInbox } from "react-icons/fa";
import { FaBook, FaRegCircleUser, FaLink } from "react-icons/fa6";
import Image from "next/image";

export default function KambazNavigation() {
  const pathname = usePathname();
  const links = [
    { label: "Dashboard", path: "/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/Dashboard", icon: FaBook },
    { label: "Calendar", path: "/Calendar", icon: FaRegCalendarAlt },
    { label: "Inbox", path: "/Inbox", icon: FaInbox },
    { label: "Labs", path: "/Labs", icon: FaLink },
  ];

  return (
    <ListGroup
      id="wd-kambaz-navigation"
      style={{ width: 110 }}
      className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroupItem
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        action
        className="bg-black border-0 text-center"
      >
        <Image src="/images/NEU.png" alt="NEU Logo" width={75} height={75} />
      </ListGroupItem>

      <ListGroupItem
        as={Link}
        href="/Account"
        className={`text-center border-0 bg-black
          ${
            pathname.includes("Account")
              ? "bg-white text-danger"
              : "bg-black text-white"
          }`}
      >
        <FaRegCircleUser
          className={`fs-1 ${
            pathname.includes("Account") ? "text-danger" : "text-white"
          }`}
        />
        <br />
        Account
      </ListGroupItem>
      
      {links.map((link) => (
        <ListGroupItem
          key={link.label}
          as={Link}
          href={link.path}
          className={`bg-black text-center border-0
            ${
              pathname.includes(link.label)
                ? "text-danger bg-white"
                : "text-white bg-black"
            }`}
        >
          {link.icon({ className: "fs-1 text-danger" })}
          <br />
          {link.label}
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
