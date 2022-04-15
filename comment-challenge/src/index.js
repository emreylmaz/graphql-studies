import { GraphQLServer }  from "graphql-yoga";
import resolvers from "@resolvers";
import typeDefs from "@type-defs";

import pubsub from "./pubsub";
import db from "./data";




const server = new GraphQLServer(
    { typeDefs,
            resolvers,
            context: {
            pubsub,
            db,
            } });
server.start(() => console.log("Server is running on localhost:4000"));

