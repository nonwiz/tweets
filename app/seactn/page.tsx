import Tweets from "@/components/ui/tweets";
import { getSeactnFeeds } from "@/lib/server";

export default async function SeactnPage() {
  const data = await getSeactnFeeds(process.env.ACTOR_SEACTN || "");
  return (
    <>
      <Tweets data={data} />
    </>
  )
}
