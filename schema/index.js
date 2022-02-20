import { gql } from 'apollo-server';

export default gql`

extend type Event @key(fields: "eventId") {
  eventId: ID! @external
  reviews: [Review!]
}

extend type Attendee @key(fields: "attendeeId") {
  attendeeId: ID! @external
  reviewsByAttendee: [Review!]
}

type Review {
  reviewId: ID!
  comment: String!
  rating: Int!
  event: Event!
  reviewer: Attendee!
}

type Query {
  getReviews: [Review]
  getReviewById(reviewId: ID!): Review
}
  
`;