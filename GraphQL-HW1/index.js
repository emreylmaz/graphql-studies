const { ApolloServer, gql } = require("apollo-server");
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const { locations, events, participants, users } = require("./data");
const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        events: [events!]!

    }
    type events {
        id: ID!
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: String!
        user_id: String!
        location: locations!
        participants: [participants!]!
    }
    type locations {
        id: ID!
        name: String!
        desc: String!
        lat: String!
        lng: String!
    }
    type participants {
        id: ID!
        user_id: String!
        event_id: String!
    }
    type Query {
        # users
        users: [User!]!
        user (id: ID!): User!

        # events
        events: [events!]!
        event(id: ID!): events!
        # locations
        locations: [locations!]!
        location(id: ID!): locations
        # participants
        participants: [participants!]!
        participant(id: ID!): participants

    }
`;

const resolvers = {
    Query: {
        //! User Queries
        users  : () => users,
        user: (parent, args, context, info) => {
            const user = users.find(user => user.id === args.id);
            if(!user){
                throw Error("User not found")
            }
            return user;
        },
        //! Events Queries
        events: () => events,
        event : (parent, args) => {
            const event = events.find(event => event.id === args.id);
            if(!event){
                throw Error("Event not found")
            }
            return event;

        },

        //! Locations Queries
        locations: () => locations,
        location: (parent, args) => {
            const location = locations.find(location => location.id === args.id);
            if(!location){
                throw Error("Location not found")
            }
            return location;

        },

        //! Participants Queries
        participants: () => participants,
        participant: (parent, args) => {
            const participant = participants.find(participant => participant.id === args.id);
            if(!participant){
                throw Error("Participant not found")
            }
            return participant;

        }


    },
    User: {
        events: (parent, args, context, info) => {
            return events.filter(event => event.user_id === parent.id);
        }
    },
    events: {
        location: (parent, args, context, info) => {
            return locations.find(location => location.id === parent.location_id);
        },
        participants: (parent, args, context, info) => {
            return participants.filter(
                participant => participant.event_id === parent.id
            );
        }
    }


};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
            // options
        }),
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});