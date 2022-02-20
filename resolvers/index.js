// import reviews data
import { reviews, eventIdsToReviewIds, reviewIdToAttendeeId } from '../models';

// Define resolvers
export default {
  Query: {
    getReviews: async () => {
      // RETURN a list of reviews
      // Note: the function signature can also be written as async (parentObj, args, context, info), just like in vanilla graphQL
      return reviews;
    },
    getReviewById: async (_, { reviewId }) => {
      // RETURN reviews that have their reviewId equal to reviewId.
      // Note: the function signature can also be written as async (parentObj, args, context, info).  _ is just convention for not using any of the args
      return reviews.find((review) => review.reviewId === reviewId);
    }
  },
  Review: {

    event(parent) {
      // RETURN an event with eventId for which the review for parent.reviewId is a part of
      const eventId = Object.keys(eventIdsToReviewIds).find(eventIds => eventIdsToReviewIds[eventIds].includes(parent.reviewId));
      return { __typename: "Event", eventId: eventId };

    },
    
    reviewer(parent) {
      // RETURN an attendee with attendeeId - corresponding to the attendee that wrote the review corresponding to parent.reviewId
      const attendeeId = reviewIdToAttendeeId[parent.reviewId];
      return { __typename: "Attendee", attendeeId: attendeeId };
    },
  },
  Attendee: {
    reviewsByAttendee(parent) {
      // RETURN a list of review written by attendee with attendeeId parent.attendeeId
      const reviewId = Object.keys(reviewIdToAttendeeId).find(reviewId => reviewIdToAttendeeId[reviewId].includes(parent.attendeeId));
      // get the index number of the review so we can index into the reviews list
      const reviewNumber = Number(reviewId.match(/\d+/));
      return reviews[reviewNumber];
    }
  },
  Event: {
    reviews(parent) {
      // RETURN a list of review written for event with parent.eventId
      let reviewsList = [];
      const reviewIds = eventIdsToReviewIds[parent.eventId];

      // populate the review list 
      reviewIds.forEach(reviewId => reviewsList.push(reviews[Number(reviewId.match(/\d+/))]));
      return reviewsList;
    }
  }
};