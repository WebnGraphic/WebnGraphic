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

interface TopReferrersProps {
  data: any;
  days: number;
}

export function TopReferrers({ data, days }: TopReferrersProps) {
  const referrers =
    data?.rows?.map((row: any) => ({
      source: row.dimensions[0],
      sessions: Number.parseInt(row.metrics[0].values[0]),
    })) || [];

  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle>Top Referrers</CardTitle>
        <CardDescription>
          Sources driving traffic to your website in the last {days} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Source</TableHead>
              <TableHead className="text-right">Sessions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {referrers.map((referrer: any) => (
              <TableRow key={referrer.source}>
                <TableCell className="font-medium">{referrer.source}</TableCell>
                <TableCell className="text-right">
                  {referrer.sessions.toLocaleString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
