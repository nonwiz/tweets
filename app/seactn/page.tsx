import Tweets from "@/components/ui/tweets";
import { getActorFeeds } from "@/lib/server";

export default async function SeactnPage() {
  const data = await getActorFeeds(process.env.ACTOR_SEACTN || "");
  return (
    <main className="p-4">
      <Tweets data={data} style={{isLarge: true, isBold: true}}/>
    </main>
  )
}
