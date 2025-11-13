"use server"
import {orm} from "@/lib/orm";
import {revalidatePath} from "next/cache";

export async function submitVote(category, speechId, vote, userId, ownVote){
  console.log(category);
  if(ownVote){
    await orm.vote.update({
      where: {
        id: ownVote,
      },
      data: {
        [`${category}`]: vote
      }
    })
  }else{
    await orm.vote.create({
      data: {
        [`${category}`]: vote,
        userId,
        speechId
      }
    })
  }
  revalidatePath("debates")
}