import Tweets from "@/components/ui/tweets";
import { getActorFeeds, getFeeds } from "@/lib/server";


export default async function MoruPage() {
  const data = await getActorFeeds(process.env.ACTOR_MORU as string);
  return (
    <>
      <Tweets data={data} style={{isLarge: false}} />
    </>
  )
}
