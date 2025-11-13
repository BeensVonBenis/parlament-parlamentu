"use client"
import {Table} from "react-bootstrap";
import {Speech} from "@/app/(pages)/debates/[debateId]/_components/speech";

export function StageView({speeches, closed}) {
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
              <td><Speech author={closed?.user} content={closed.content} stage={closed.stage}
                          votes={closed.votes}/></td>
            </tr>
          </>
        }
      })()}
      <tr><th>Wszystkie wypowiedzi:</th></tr>
      </thead>
      <tbody>
      {speeches.map((a, i) => {
        return <tr>
          <td><Speech author={a?.user} content={a.content} stage={a.stage} votes={a.votes}/></td>
        </tr>
      })}
      </tbody>
    </Table>
  </div>
}