"use client"
import {Button, Table} from "react-bootstrap";
import {scale} from "@/globals";

export function Votes({votes, speechId, author, closed, user}){

  function Scale({category,votes, locked, speechId, user, ownVote}){
    const score = ownVote ? ownVote[`score${category}`] : null;
    const countedVotes=votes.map((a)=>a[`score${category}`]).filter((a)=>a);
    const average=countedVotes.reduce((acc, a)=>acc+a, 0)/countedVotes.length;
    return <div>{
      scale[Math.round(average)]
    }avg{average || "?"}{!locked &&    [...new Array(5)].map((a, i)=>
      <Button variant={score === i ? "primary" : "none"}>
        {scale[i]}
      </Button>)}</div>
 ;

  }
  const thisUsersVotes=votes.find((a)=>a.userId === parseInt(user?.id));
  console.log(votes, user,thisUsersVotes, author, closed, author.id, user.id)
  return <Table>
    <tr>
      <td>Logos</td>
      <td><Scale locked={closed || author.id === parseInt(user.id)} votes={votes} ownVote={thisUsersVotes} speechId={speechId} user={user} category={"Logos"}></Scale></td>
    </tr>
    <tr>
      <td>Patos</td>
      <td><Scale locked={closed || author.id === parseInt(user.id)} votes={votes} ownVote={thisUsersVotes} speechId={speechId} user={user} category={"Pathos"}></Scale></td>
    </tr>
    <tr>
      <td>Poprawność</td>
      <td><Scale locked={closed || author.id === parseInt(user.id)} votes={votes} ownVote={thisUsersVotes} speechId={speechId} user={user} category={"Mistakes"}></Scale></td>
    </tr>
    <tr>
      <td>Kontekst</td>
      <td><Scale locked={closed || author.id === parseInt(user.id)} votes={votes} ownVote={thisUsersVotes} speechId={speechId} user={user} category={"Context"}></Scale></td>
    </tr>
    <tr>
      <td>Rola</td>
      <td><Scale locked={closed || author.id === parseInt(user.id)} votes={votes} ownVote={thisUsersVotes} speechId={speechId} user={user} category={"Role"}></Scale></td>
    </tr>
  </Table>
}