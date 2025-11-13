import {orm} from "@/lib/orm";
import {
  StageView
} from "@/app/(pages)/debates/[debateId]/_components/stageView";
import {stages} from "@/globals";

export default async function page({params}){
  const {debateId} = await params;
  const debateInfo=await orm.debate.findFirst({
    where: {
      id: parseInt(debateId)
    },
    include: {
      speeches: {
        include: {
          user: true
        }
      }
    }
  })
  const speechesByStage=debateInfo.speeches.reduce((acc, a)=>{
    if(!acc[a?.stage]){
      acc[a?.stage] = [a];
    }else{
      acc[a?.stage].push(a);
    }
    return acc;
  }, []);
  return <div>
    <h1>Debata: {debateInfo.topic}</h1>
    {
      speechesByStage.map((a, i)=>{
        return <>
          <h2>{stages[i]}</h2>
          <StageView
          key={i}
          speeches={a}
          closed={(()=>{

            if(i<debateInfo.stage){
              return a?.find((b)=>b.elected)
            }else{
              return false;
            }
          })()}
        ></StageView></>
      })
    }
  </div>
}