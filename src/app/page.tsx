import Header from "@/components/Header";
import db from "@/db";
import { notes } from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";

export default async function Home() {
  const user = await getUser();

  const _notes = await db
    .select()
    .from(notes)
    .where(eq(notes.userId, user.id))
    .orderBy(desc(notes.updatedAt));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      {_notes.map((note) => (
        <div key={note.id} className="w-96 rounded-lg bg-white p-8 shadow-md">
          <p className="text-lg font-semibold">{note.text}</p>
          <p className="text-sm text-gray-500">
            {new Date(note.updatedAt).toLocaleString()}
          </p>
        </div>
      ))}
    </main>
  );
}
