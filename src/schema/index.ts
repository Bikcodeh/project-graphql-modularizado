import 'graphql-import-node';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './../resolvers/resolversMap';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(`${__dirname}/**/*.graphql`), { all:  true });

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;