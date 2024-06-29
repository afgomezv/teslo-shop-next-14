export const revalidate = 0;

import { Pagination, Title } from "@/components";
import { getPaginatedUsers } from "@/actions";
import { redirect } from "next/navigation";
import { UsersTable } from "./ui/UsersTable";

export default async function AdminUsersPage() {
  const { ok, users = [] } = await getPaginatedUsers();

  if (!ok) {
    redirect("/auth/login");
  }

  return (
    <>
      <Title title="Administración de usuarios" />

      <div className="mb-10">
        <UsersTable users={users} />

        {/* <Pagination totalPages={1} /> */}
      </div>
    </>
  );
}
