import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaPencil } from "react-icons/fa6";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaPencil
        onClick={() => editModule(moduleId)}
        className="text-primary me-3"
        style={{ cursor: "pointer" }}
      />
      <FaTrash
        className="text-danger me-3"
        onClick={() => deleteModule(moduleId)}
        style={{ cursor: "pointer" }}
      />
      <span className="me-2">
        <GreenCheckmark />
      </span>
      <FaPlus className="me-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}