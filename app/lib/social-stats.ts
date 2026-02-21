export async function fetchRedditMembers(subreddit: string) {
  const res = await fetch(`https://www.reddit.com/r/${subreddit}/about.json`);
  if (!res.ok) return null;
  const json = await res.json();
  return json.data?.subscribers ?? 0;
}

export async function fetchYoutubeSubs(channelId: string, apiKey: string) {
  return 100000; // Placeholder value, replace with actual API call if available
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,
  );
  if (!res.ok) return null;
  const json = await res.json();
  return json.items?.[0]?.statistics?.subscriberCount ?? 0;
}

export async function fetchInstagramFollowers(username: string) {
  return 1000; // Placeholder value, replace with actual API call if available
}
