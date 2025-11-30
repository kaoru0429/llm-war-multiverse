import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';

// Mock Data based on C-01 extraction
const models = [
  { id: '1', name: 'GPT-4', architecture: 'DENSE', trainingCost: 100000000, companyId: '1' },
  { id: '2', name: 'DeepSeek V3', architecture: 'MOE', trainingCost: 5500000, companyId: '2' },
  { id: '3', name: 'Kimi K2', architecture: 'MOE', trainingCost: 4600000, companyId: '3' },
  { id: '4', name: 'Llama 4', architecture: 'MOE', trainingCost: 15000000, companyId: '4' },
];

const companies = [
  { id: '1', name: 'OpenAI', country: 'USA' },
  { id: '2', name: 'DeepSeek', country: 'China' },
  { id: '3', name: 'Moonshot AI', country: 'China' },
  { id: '4', name: 'Meta', country: 'USA' },
];

const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

const resolvers = {
  Query: {
    models: (_, args) => {
      if (args.architecture) {
        return models.filter(m => m.architecture === args.architecture);
      }
      return models;
    },
    company: (_, args) => companies.find(c => c.name === args.name),
    compareModels: (_, args) => models.filter(m => args.ids.includes(m.id)),
  },
  Model: {
    company: (parent) => companies.find(c => c.id === parent.companyId),
  },
  Company: {
    models: (parent) => models.filter(m => m.companyId === parent.id),
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Note: This is a stub for the actual server start
// const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
// console.log(`🚀  Server ready at: ${url}`);
