import { Cat } from './models/Cat'
// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    hello: () => 'Hello world!!!',
    cats: () => Cat.find()
  },
  Mutation: {
    createCat: async (_, { name }) => {
      const cat = new Cat({ name });
      await cat.save()
      return cat
    }
  }
};