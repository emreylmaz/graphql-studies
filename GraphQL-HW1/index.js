const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const { events, locations, users, participants } = require('./data');
const { nanoid } = require('nanoid');

const typeDefs = gql`
    # User
    type User {
        id: ID!
        username: String!
        email: String!
        events: [Event!]!
    }
    input addUserInput {
        username: String!
        email: String!
    }
    input updateUserInput {
        username: String
        email: String
    }
    # Location
    type Location {
        id: ID!
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }
    input addLocationInput {
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }
    input updateLocationInput {
        name: String
        desc: String
        lat: Float
        lng: Float
    }
    
    # Event
    type Event {
        id: ID!
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: ID!
        user_id: ID!
        user: User!
        location: Location!
        participants: [Participant!]!
    }
    input addEventInput {
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: ID!
        user_id: ID!
    }
    input updateEventInput {
        title: String
        desc: String
        date: String
        from: String
        to: String
        location_id: ID
        user_id: ID
    }
    # Participant
    type Participant {
        id: ID!
        user_id: ID!
        event_id: ID!
    }
    input addParticipantInput {
        user_id: ID!
        event_id: ID!
    }
    input updateParticipantInput{
        user_id: ID
        event_id: ID
    }
    type Query {
        # Event
        events: [Event!]!
        event(id: ID!): Event!
        # Location
        locations: [Location!]!
        location(id: ID!): Location!
        # User
        users: [User!]!
        user(id: ID!): User!
        # Participant
        participants: [Participant!]!
        participant(id: ID!): Participant!
    }
    # Delete All Output
    type DeleteAllOutput {
        count: Int!
    }
    type Mutation {
        # Event
        addEvent(data: addEventInput!): Event!
        updateEvent(id: ID!, data: updateEventInput!): Event!
        deleteEvent(id: ID!): Event!
        deleteAllEvents: DeleteAllOutput!
        # Location
        addLocation(data: addLocationInput!): Location!
        updateLocation(id: ID!, data: updateLocationInput!): Location!
        deleteLocation(id: ID!): Location!
        deleteAllLocations: DeleteAllOutput!
        # User
        addUser(data: addUserInput!): User!
        updateUser(id: ID!, data: updateUserInput!): User!
        deleteUser(id: ID!): User!
        deleteAllUsers: DeleteAllOutput!

        # Participant
        addParticipant(data: addParticipantInput!): Participant!
        updateParticipant(id: ID!, data: updateParticipantInput!): Participant!
        deleteParticipant(id: ID!): Participant!
        deleteAllParticipants: DeleteAllOutput!
    }
`;

const resolvers = {
    Query: {
        // Event
        events: () => events,
        event: (parent, args) => events.find((event) => event.id === args.id),

        // Location
        locations: () => locations,
        location: (parent, args) => locations.find((location) => location.id === args.id),

        // User
        users: () => users,
        user: (parent, args) => users.find((user) => user.id === args.id),

        // Participant
        participants: () => participants,
        participant: (parent, args) => participants.find((participant) => participant.id === args.id),
    },

    User: {
        events: (parents) => events.filter((event) => event.user_id === parents.id),
    },

    Event: {
        user: (parents) => users.find((user) => user.id === parents.user_id),

        location: (parents) => locations.find((location) => location.id === parents.location_id),

        participants: (parents) => participants.filter((participant) => participant.event_id === parents.id)
    },

    Mutation: {
        // Event
        addEvent: (parent, { data }) => {
            const event = {
                id: nanoid(),
                ...data
            }

            events.push(event);

            return event;
        },
        updateEvent: (parent, { id, data }) => {
            const event_index = events.findIndex((event) => event.id === id);

            if (event_index === -1) {
                throw new Error("Event not found");
            }

            const updated_event = events[event_index] = {
                ...events[event_index],
                ...data
            }

            return updated_event;
        },
        deleteEvent: (parent, { id }) => {
            const event_index = events.findIndex((event) => event.id === id)

            if (event_index === -1) {
                throw new Error("Event not found")
            }

            const deleted_event = events[event_index]

            events.splice(event_index, 1);

            return deleted_event;
        },
        deleteAllEvents: (parent, args) => {
            const count = events.length;

            events.splice(0, events.length);

            return { count };
        },

        // Location
        addLocation: (parent, { data }) => {
            const location = {
                id: nanoid(),
                ...data
            }

            locations.push(location);

            return location;
        },
        updateLocation: (parent, { id, data }) => {
            const location_index = locations.findIndex((location) => location.id === id);

            if (location_index === -1) {
                throw new Error("Location not found");
            }

            const updated_location = locations[location_index] = {
                ...locations[location_index],
                ...data
            }

            return updated_location;
        },
        deleteLocation: (parent, { id }) => {
            const location_index = locations.findIndex((location) => location.id === id)

            if (location_index === -1) {
                throw new Error("Location not found")
            }

            const deleted_location = locations[location_index]

            locations.splice(location_index, 1);

            return deleted_location;
        },
        deleteAllLocations: (parent, args) => {
            const count = locations.length;

            locations.splice(0, locations.length);

            return { count };
        },

        // User
        addUser: (parent, { data }) => {
            const user = {
                id: nanoid(),
                ...data
            }

            users.push(user);

            return user;
        },
        updateUser: (parent, { id, data }) => {
            const user_index = users.findIndex((user) => user.id === id);

            if (user_index === -1) {
                throw new Error("User not found");
            }

            const updated_user = users[user_index] = {
                ...users[user_index],
                ...data
            }

            return updated_user;
        },
        deleteUser: (parent, { id }) => {
            const user_index = users.findIndex((user) => user.id === id)

            if (user_index === -1) {
                throw new Error("User not found")
            }

            const deleted_user = users[user_index]

            users.splice(user_index, 1);

            return deleted_user;
        },
        deleteAllUsers: (parent, args) => {
            const count = users.length;

            users.splice(0, users.length);

            return { count };
        },

        // Participant
        addParticipant: (parent, { data }) => {
            const participant = {
                id: nanoid(),
                ...data
            }

            participants.push(participant);

            return participant;
        },
        updateParticipant: (parent, { id, data }) => {
            const participant_index = participants.findIndex((participant) => participant.id === id);

            if (participant_index === -1) {
                throw new Error("Participant not found");
            }

            const updated_participant = participants[participant_index] = {
                ...participants[participant_index],
                ...data
            }

            return updated_participant;
        },
        deleteParticipant: (parent, { id }) => {
            const participant_index = participants.findIndex((participant) => participant.id === id)

            if (participant_index === -1) {
                throw new Error("Participant not found")
            }

            const deleted_participant = participants[participant_index]

            participants.splice(participant_index, 1);

            return deleted_participant;
        },
        deleteAllParticipants: (parent, args) => {
            const count = participants.length;

            participants.splice(0, participants.length);

            return { count };
        }
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({})
    ]
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});