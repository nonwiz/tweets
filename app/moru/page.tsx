import Tweets from "@/components/ui/tweets";
import { getFeeds } from "@/lib/server";


export default async function MoruPage() {
  const data = await getFeeds();
  return (
    <>
      <Tweets data={data} />
    </>
  )
}
