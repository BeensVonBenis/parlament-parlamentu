import "./page.scss"
import {PrismaClient} from "@prisma/client";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="homePage">
      <h4>Witam w tym skromnym interfejsie :)</h4>
      <br></br>

      <h1>Na co czekasz?</h1>
      <Link href={"debates"}>  <h1>Przejdź do debat!!!</h1></Link>

    </div>
  );
}
