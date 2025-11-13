"use client"
import MDEditor from '@uiw/react-md-editor';
import {Votes} from "@/app/(pages)/debates/[debateId]/_components/votes";
export function Speech({closed,author, speechId,content, stage, votes, user}){
  return <>
    <h4>Autor: {author?.name} {author?.surname}</h4>
    <MDEditor.Markdown source={content}></MDEditor.Markdown>
    <Votes author={author} user={user} speechId={speechId}  closed={closed} votes={votes}/>
  </>
}