import {PrismaClient} from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const data= await prisma.user.findMany({});
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
