import React from "react";

import { getStreams } from "@/lib/feed-service";

import { ResultCard } from "../result-card";

export async function Results() {
  const data = await getStreams();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Streams we think you&apos;ll like
      </h2>
      {data.length === 0 && (
        <div className="text-muted-foreground text-sm">No streams found.</div>
      )}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((result) => (
          <div key={result.id}>
            <ResultCard data={result} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ResultsSkeleton() {
  return <div>Results</div>;
}
