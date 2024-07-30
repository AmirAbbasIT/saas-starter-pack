import { Breadcrumbs } from "@/components/dashboard/layout/breadcrumbs";
import { KanbanBoard } from "@/components/dashboard/layout/kanban/kanban-board";
import NewTaskDialog from "@/components/dashboard/layout/kanban/new-task-dialog";
import { Heading } from "@/components/dashboard/ui/heading";

const breadcrumbItems = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Kanban", link: "/dashboard/kanban" },
];

export default function page() {
  return (
    <>
      example board
      {/* <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="flex items-start justify-between">
          <Heading title={`Kanban`} description="Manage tasks by dnd" />
          <NewTaskDialog />
        </div>
        <KanbanBoard />
      </div> */}
    </>
  );
}
