import { GraphQLServer }  from "graphql-yoga";
import resolvers from "@resolvers";
import typeDefs from "@type-defs";

import pubsub from "./pubsub";

import db from "./db";

db();

import User from "./models/User";
import Post from "./models/Post";


//Fake data
import data from "./data";




const server = new GraphQLServer(
    { typeDefs,
            resolvers,
            context: {
            pubsub,
            db: data,
            _db: {
                User,
                Post,
            }
            } });
server.start(() => console.log("Server is running on localhost:4000"));

