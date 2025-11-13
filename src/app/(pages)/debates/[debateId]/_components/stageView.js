"use client"
import {Button, Table} from "react-bootstrap";
import {Speech} from "@/app/(pages)/debates/[debateId]/_components/speech";
import {useState} from "react";

export function StageView({speeches, closed, user}) {
  const [collapsed, setCollapsed] = useState(closed && true);
  return <div>
    <Table>
      <thead>
      <tr>
        <th>Ilość wypowiedzi: {speeches.length}</th>
      </tr>
      {(() => {
        if (!closed) {
          return <tr>
            <th>Etap dalej trwa</th>
          </tr>
        } else {
          return <>
            <tr>
              <th>Wybrana wypowiedź to</th>
            </tr>
            <tr>
              <td><Speech speechId={closed.id} closed user={user} author={closed?.user} content={closed.content} stage={closed.stage}
                          votes={closed.votes}/></td>
            </tr>
          </>
        }
      })()}
      <tr><th>Wszystkie wypowiedzi: <Button onClick={()=>setCollapsed((a)=>!a)} size={"sm"} variant={"none"}>{
        collapsed ? "rozwiń" : "zwiń"
      }</Button></th></tr>
      </thead>
      <tbody hidden={collapsed}>
      {speeches.map((a, i) => {
        return <tr key={i}>
          <td><Speech speechId={a.id} votes={a?.votes} user={user} author={a?.user} content={a.content} stage={a.stage} votes={a.votes}/></td>
        </tr>
      })}
      </tbody>
    </Table>
  </div>
}