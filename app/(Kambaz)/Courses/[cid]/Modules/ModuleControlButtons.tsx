import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
}) {
  return (
<div className="float-end">
      <FaTrash
        className="text-danger me-3"
        onClick={() => deleteModule(moduleId)}
        style={{ cursor: "pointer" }}
      />
      <GreenCheckmark />
      <BsPlus className="ms-1 fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
