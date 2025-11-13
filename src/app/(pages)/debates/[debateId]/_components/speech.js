"use client"
import MDEditor from '@uiw/react-md-editor';
export function Speech({author,content, stage, votes}){
  return <>
    <h4>Autor: {author?.name} {author?.surname}</h4>
    <MDEditor.Markdown source={content}></MDEditor.Markdown>
  </>
}