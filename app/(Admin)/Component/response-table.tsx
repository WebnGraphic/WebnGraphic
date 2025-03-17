import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { deleteResponse, getAllResponses } from "../action/response";
import DeleteButton from "./delete-button";
import PaginationControl from "./pagination";

export default async function ResponseTable({
  search,
  page,
}: {
  search: string;
  page: number;
}) {
  const pageSize = 10;
  const { responses, pagination } = await getAllResponses(
    search,
    page,
    pageSize
  );
  if (responses.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold mb-2">No responses found</h2>
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
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Interest</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {responses.map((response, index) => (
            <TableRow key={index}>
              <TableCell>{response.name}</TableCell>
              <TableCell>{response.email}</TableCell>
              <TableCell>{response.phone}</TableCell>
              <TableCell>{response.interest}</TableCell>
              <TableCell>{response.message}</TableCell>
              <TableCell>
                <DeleteButton
                  id={response.id}
                  deleteToDo={deleteResponse}
                  message="Response deleted successfully!"
                />
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
