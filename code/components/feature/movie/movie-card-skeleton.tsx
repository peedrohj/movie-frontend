import React from "react";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function MovieCardSkeleton() {
  return (
    <Card className="w-[350px] p-5">
      <Skeleton className="w-[300px] h-[200px] " />
    </Card>
  );
}

export default MovieCardSkeleton;
