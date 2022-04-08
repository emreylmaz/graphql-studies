const { ApolloServer, gql } = require("apollo-server");
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { users, events, participants, locations } = require("./data");

const typeDefs = gql`
    
    type User {
        id: ID!
        username: String!
        email: String!
        events: [Event]!
    }
    
    type Event {
        id:ID!
        title:String!
        desc:String!
        date:String!
        form:String!
        to:String!
        location_id:String
        user_id:String
        user:User
        location:Location
        participants: [Participant]
    }
    
    type Location {
        id: ID!
        name: String!
        desc: String!
        lat: String!
        Ing: String!
    }

    type Participant {
        id: ID!
        user_id: String!
        event_id: String!
    }
    type Query {
        # Event
        events: [Event!]!
        event(id: ID!): Event!
        
        # User
        users: [User!]!
        user(id: ID!): User!
        
        # Location
        locations: [Location!]!
        location(id: ID!): Location!
        
        # Participant
        participants: [Participant!]!
        participant(id: ID!): Participant!
    }
`;

const resolvers = {
    Query: {
        // Event
        events: () => events,
        event: (parent, args) => {
            const event = events.find((event) => event.id === args.id);
            if (!event) {
                return new Error("Event not found");
            }
            return event;
        },

        // User
        users: () => users,
        user: (parent, args) => {
            const user = users.find((user) => user.id === args.id);
            if (!user) {
                return new Error("User not found");
            }
            return user;
        },

        // Location
        locations: () => locations,
        location: (parent, args) => {
            const location = locations.find((location) => location.id === args.id);
            if (!location) {
                return new Error("Location not found");
            }
            return location;
        },

        // Participant
        participants: () => participants,
        participant: (parent, args) => {
            const participant = participants.find(
                (participant) => participant.id === args.id
            );
            if (!participant) {
                return new Error("Participant not found");
            }
            return participant;
        },
    },
    Event:{
        user:(parent)=>users.find((user)=>user.id===parent.user_id),
        location:(parent)=>locations.find((location)=>location.id ===parent.location_id),
        participants:(parent)=>participants.filter((participant)=>participant.event_id===parent.id)
    },

    User: {
        events:(parent,args)=>events.filter((event)=>event.user_id===parent.id)
    },
};


const server = new ApolloServer({ typeDefs, resolvers, plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
            // options
        })
    ] });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});