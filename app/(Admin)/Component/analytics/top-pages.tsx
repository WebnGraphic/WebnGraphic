/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TopPagesProps {
  data: any;
  days: number;
}

export function TopPages({ data, days }: TopPagesProps) {
  const pages =
    data?.rows?.map((row: any) => ({
      path: row.dimensions[0],
      pageviews: Number.parseInt(row.metrics[0].values[0]),
    })) || [];

  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle>Top Pages</CardTitle>
        <CardDescription>
          Most viewed pages on your website in the last {days} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Page Path</TableHead>
              <TableHead className="text-right">Page Views</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pages.map((page: any) => (
              <TableRow key={page.path}>
                <TableCell className="font-medium">{page.path}</TableCell>
                <TableCell className="text-right">
                  {page.pageviews.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
