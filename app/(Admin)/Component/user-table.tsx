import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllUsersBySearch } from "../action/user";
import PaginationControl from "./pagination";

export default async function UserTable({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const pageSize = 10;
  const { users, pagination } = await getAllUsersBySearch(
    search,
    page,
    pageSize
  );
  if (users.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold mb-2">No users found</h2>
        <p className="text-muted-foreground">
          Try adjusting your search or filter to find what you&apos;re looking
          for.
        </p>
      </div>
    );
  }
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.image || ""} alt="@username" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <button className="bg-red-500 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div>
        <PaginationControl
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          searchParams={search ? { q: search } : {}}
        />
      </div>
    </div>
  );
}
