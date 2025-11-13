import {orm} from "@/lib/orm";
import {Table} from "react-bootstrap";
import {stages} from "@/globals";
import Link from "next/link";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";


export default async function getPage(){
  const debates=await orm.debate.findMany({
    include: {
      speeches: true
    }
  })
  return <div>
    <Table striped hover>
      <thead><tr>
        <th>Temat debaty</th>
        <th>Etap debaty</th>
        <th>Ilość wypowiedzi dla debaty</th>
        <th>Ilość wypowiedzi dla etapu</th>
      </tr></thead>
      <tbody>
      {debates.map(a =>{
        return <><tr>
          <td>{a.topic}</td>
          <td>{stages[a?.stage]}</td>
          <td>{a?.speeches.length}</td>
          <td>{a?.speeches?.filter((b)=>b.stage===a.stage).length}</td>
        </tr>
        <tr>
          <td colSpan={4}><Link href={`debates/${a?.id}`}>Przejdź do debaty</Link></td>
        </tr>
        </>
      })}
      </tbody>
    </Table>
  </div>
}