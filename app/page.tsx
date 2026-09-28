import { connection } from "next/server";

// The greeting comes from the NEXT_PUBLIC_GREETING environment variable.
// Next.js swaps this in at build time, so changing it later needs a rebuild/redeploy.
// If it's missing (or empty), the `||` falls back to the default message.
const greeting = process.env.NEXT_PUBLIC_GREETING || "Hello from Vercel";

export default async function Home() {
  // Wait for a real request so the date is today's, not the day the site was built.
  await connection();
  // ponytail: server timezone (UTC on Vercel), pass timeZone if the date must match a region
  const today = new Date().toLocaleDateString("en-US", { dateStyle: "long" });

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-sm uppercase tracking-widest text-zinc-500">Sprint3_VercelTest</p>
      <h1 className="text-4xl font-semibold">{greeting}</h1>
      <p className="text-lg">Built during the Building with AI agents course.</p>
      <p className="text-lg text-zinc-500">{today}</p>
    </main>
  );
}
