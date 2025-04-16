import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
      <p className="text-muted-foreground mb-8 max-w-md">
        We couldn&lsquo;t find the blog post you&apos;re looking for. It may
        have been removed or the URL might be incorrect.
      </p>
      <Link
        href="/blog"
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        Back to Blog
      </Link>
    </div>
  );
}
