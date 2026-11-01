import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <LoaderCircle className="size-5 animate-spin text-accent" aria-hidden />
      <span className="sr-only">Loading</span>
    </div>
  );
}
