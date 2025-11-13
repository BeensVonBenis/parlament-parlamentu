import {PrismaClient} from "@prisma/client";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const prisma = new PrismaClient();
  const data= await prisma.user.findMany({});
  console.log(session)
  return (
    <div>
      {JSON.stringify(data, null, 2)}
    </div>
  );
}
