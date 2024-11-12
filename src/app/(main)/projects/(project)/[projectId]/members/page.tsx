"use client";

import MemberTable from "./components/member-table/table";
import { TableColumns } from "./components/member-table/table-columns";
import { FiUserPlus } from "react-icons/fi";
import { useProjectStore } from "@/hooks/useProjectStore";
import { use } from "react";
import { Button } from "@/components/ui/button";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

type Params = Promise<{ projectId: string }>;

export default function Members(props: { params: Params }) {
  const params = use(props.params);
  const { projectId } = params;

  const { project, members } = useProjectStore();

  if (!project) {
    return null;
  }

  return (
    <>
      <main className="flex flex-1 flex-col p-4 lg:pt-4 lg:ml-[260px]">
        <div className="text-2xl font-bold tracking-tight">
          {project.name} Members
        </div>
        {!members || members.length == 0 ? (
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm min-h-[560px]">
            <div className="flex flex-col items-center gap-1 text-center">
              <FiUserPlus className="h-12 w-12 text-muted-foreground" />
              <h3 className="mt-4 text-xl font-semibold">
                No members in the project
              </h3>
              <p className="mb-4 mt-2 text-base text-muted-foreground">
                There are no members in the project. Add one below from the
                membership requests.
              </p>
              <Link href={`/projects/${projectId}/members/requests`}>
                <Button className="flex items-center space-x-2 rounded-3xl">
                  <AiOutlinePlus className="w-4 h-4 text-white" />
                  <span>Add Member</span>
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="text-lg text-muted-foreground">
              Here&apos;s a list of your project members!
            </div>
            <MemberTable
              data={members}
              projectId={projectId}
              columns={TableColumns({ projectId })}
            />
          </>
        )}
      </main>
    </>
  );
}
