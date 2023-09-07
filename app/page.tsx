import Tweets from "@/components/ui/tweets";
import { getActorFeeds } from "@/lib/server";

export default async function Home() {
  const data = await getActorFeeds(process.env.APIFY_ACTOR_0 || "");
  return (
    <main className="p-4">
      <Tweets data={data} style={{}}/>
    </main>
  )
}
