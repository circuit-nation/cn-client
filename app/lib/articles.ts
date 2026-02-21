import type { Articles } from "~/types/articles";

const API_URL = "https://monkeys.com.co/api/v2/blog/user/circuit_nation";

const fetchArticles = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch articles: ${response.statusText}`);
    }
    const data = await response.json();
    return data.blogs as Articles[];
  } catch (error) {
    console.error("Error fetching articles:", error);
    return [];
  }
};

export default fetchArticles;