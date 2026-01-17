import { Client, Account} from 'appwrite';

export const client = new Client();

const APPWRITE_ENDPOINT = import.meta.env.VITE_APPWRITE_ENDPOINT;
const APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;

if (APPWRITE_ENDPOINT && APPWRITE_PROJECT_ID) {
  client
    .setEndpoint(APPWRITE_ENDPOINT)
    .setProject(APPWRITE_PROJECT_ID);
} else {
  console.warn('Appwrite endpoint or project ID is not set in environment variables.');
}

// Initialize the Appwrite
export const account = new Account(client);
export { ID } from 'appwrite';
