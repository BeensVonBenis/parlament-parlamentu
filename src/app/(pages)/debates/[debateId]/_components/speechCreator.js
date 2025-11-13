"use client"
import {useState} from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "react-bootstrap";
import MDEditor from "@uiw/react-md-editor";
import {submitSpeech} from "@/app/(pages)/debates/[debateId]/_server";

export function SpeechCreator({debateId, userId, stage}){
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  return <>
    <Button onClick={()=>setOpen((a)=>!a)}>Wypowiedz się</Button>
    <Modal  size={"xl"}  onClose={() => setOpen(false)} show={open}>
      <ModalHeader closeButton>Napisz wypowiedź </ModalHeader>
      <ModalBody>
        <MDEditor  style={{height: "50vh !important"}} value={content}
                  onChange={setContent}></MDEditor>
      </ModalBody>
      <ModalFooter><Button  onClick={()=>{
        submitSpeech(debateId, userId, stage, content).then((a)=>{
          setOpen(false);
        });
      }}>Zatwierdź</Button></ModalFooter>
    </Modal>
  </>
}