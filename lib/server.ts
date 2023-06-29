export async function getFeeds() {
  const res = await fetch(
    "https://api.apify.com/v2/acts/shanes~tweet-flash/runs/last/dataset/items?token=" +
      process.env.APIFY_TOKEN,
    { next: { revalidate: 600 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}

export async function getSeactnFeeds(actorId: string) {
  const res = await fetch(
    `https://api.apify.com/v2/actor-tasks/${actorId}/runs/last/dataset/items?token=` +
      process.env.APIFY_TOKEN,
    { next: { revalidate: 600 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }
  return res.json()
}
