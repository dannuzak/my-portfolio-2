import { createClient } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: '96xzjisg',
    dataset: 'production',
    apiVersion: "2023-04-11", 
  });
  
}