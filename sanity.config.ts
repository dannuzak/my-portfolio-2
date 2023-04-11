import { defineConfig } from 'sanity'; 
import { deskTool } from "sanity/desk";
import project from './sanity/schemas/project-schema';

const config = defineConfig ({
  projectId: '96xzjisg',
  dataset: 'production',
  title: "My portfolio", 
  apiVersion: "2023-04-11", 
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project]},
})

export default config;