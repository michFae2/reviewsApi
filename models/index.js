/* 
This file contains Review data. In the real-world, we would probably get this data from a database. However for now - we're hardcoding the data here.

You shouldn't change anything in this file.

eventIdsToReviewIds: A dictionary with eventIds for keys and a list of reviewIds for values.
reviewIdToAttendeeId: A dictionary with reviewId for keys and an attendeeIds for values.
reviewIdToAttendeeId: A list of review Objects. None of the feilds are nullable.
*/

export const eventIdsToReviewIds = {
  "E0": ["R0", "R1"],
  "E1": ["R2"],
  "E2": ["R3", "R4", "R5"],
  "E3": [],
  "E4": ["R6", "R30"],
  "E5": ["R31"],
  "E6": ["R7", "R35"],
  "E7": ["R39"],
  "E8": ["R8", "R9"],
  "E9": ["R33"],
  "E10": ["R10", "R11"],
  "E11": ["R12"],
  "E12": ["R13", "R14", "R15"],
  "E13": [],
  "E14": ["R16"],
  "E15": ["R36", "R37"],
  "E16": ["R17"],
  "E17": [],
  "E18": ["R18", "R19"],
  "E19": [],
  "E20": ["R20", "R21"],
  "E21": ["R22"],
  "E22": ["R23", "R24", "R25"],
  "E23": ["R38"],
  "E24": ["R26"],
  "E25": [],
  "E26": ["R27"],
  "E27": ["R34"],
  "E28": ["R28", "R29"],
  "E29": ["R32"]
};

export const reviewIdToAttendeeId = {
  "R0": "A0",
  "R1": "A20",
  "R2": "A2",
  "R3": "A8",
  "R4": "A11",
  "R5": "A34",
  "R6": "A10",
  "R7": "A5",
  "R8": "A24",
  "R9": "A38",
  "R10": "A14",
  "R11": "A40",
  "R12": "A33",
  "R13": "A46",
  "R14": "A43",
  "R15": "A25",
  "R16": "A18",
  "R17": "A21",
  "R18": "A41",
  "R19": "A26",
  "R20": "A29",
  "R21": "A30",
  "R22": "A39",
  "R23": "A4",
  "R24": "A17",
  "R25": "A6",
  "R26": "A13",
  "R27": "A15",
  "R28": "A41",
  "R29": "A32",
  "R30": "A12",
  "R31": "A23",
  "R32": "A3",
  "R33": "A4",
  "R34": "A22",
  "R35": "A33",
  "R36": "A42",
  "R37": "A43",
  "R38": "A28",
  "R39": "A19",
};

export const reviews = [
    {
      reviewId: "R0",
      comment: "amazing 😀!",
      rating: 10
    },
    {
      reviewId: "R1",
      comment: "I really liked this poster. However, there were some technical issues during the talk which I didn't like.",
      rating: 8
    },
    {
      reviewId: "R2",
      comment: "I learnt so much from this!",
      rating: 10
    },
    {
      reviewId: "R3",
      comment: "WOW!!! EVERY GHC attendee should have attended this!",
      rating: 10
    },
    {
      reviewId: "R4",
      comment: "the speaker was great at presenting and the topic was great.",
      rating: 9
    },
    {
      reviewId: "R5",
      comment: "Didn't really like the theme. the event description was not accurate!",
      rating: 1
    },
    {
      reviewId: "R6",
      comment: "fabulous!",
      rating: 10
    },
    {
      reviewId: "R7",
      comment: "it started off great but got a bit slow towards the end",
      rating: 6
    },
    {
      reviewId: "R8",
      comment: "cool",
      rating: 10
    },
    {
      reviewId: "R9",
      comment: "would watch again!",
      rating: 10
    },
    {
      reviewId: "R10",
      comment: "great!",
      rating: 10
    },
    {
      reviewId: "R11",
      comment: "good but technical issues.",
      rating: 8
    },
    {
      reviewId: "R12",
      comment: "Couldn't understand the topic",
      rating: 2
    },
    {
      reviewId: "R13",
      comment: "Got exactly what I expected & more",
      rating: 10
    },
    {
      reviewId: "R14",
      comment: "the speaker was great at presenting and the topic was great.",
      rating: 10
    },
    {
      reviewId: "R15",
      comment: "Speaker was not clear",
      rating: 1
    },
    {
      reviewId: "R16",
      comment: "good!",
      rating: 10
    },
    {
      reviewId: "R17",
      comment: "too fast paced",
      rating: 5
    },
    {
      reviewId: "R18",
      comment: "good topic",
      rating: 10
    },
    {
      reviewId: "R19",
      comment: "would watch again",
      rating: 10
    },
    {
      reviewId: "R20",
      comment: "wow!",
      rating: 10
    },
    {
      reviewId: "R21",
      comment: "",
      rating: 8
    },
    {
      reviewId: "R22",
      comment: "Nice",
      rating: 10
    },
    {
      reviewId: "R23",
      comment: "<3",
      rating: 10
    },
    {
      reviewId: "R24",
      comment: "Nice talk - but the speaker didn't focus on the negatives of the topic.",
      rating: 9
    },
    {
      reviewId: "R25",
      comment: "the logic was flawed",
      rating: 1
    },
    {
      reviewId: "R26",
      comment: "cool!",
      rating: 10
    },
    {
      reviewId: "R27",
      comment: "but the speaker didn't focus on the negatives of the topic - one sided",
      rating: 6
    },
    {
      reviewId: "R28",
      comment: "I loved every single bit",
      rating: 10
    },
    {
      reviewId: "R29",
      comment: "🎊🥳!",
      rating: 10
    },
    {
      reviewId: "R30",
      comment: "🦸🦸🦸🦸 amazing!",
      rating: 10
    },
    {
      reviewId: "R31",
      comment: "I really liked this. Wish it was longer.",
      rating: 8
    },
    {
      reviewId: "R32",
      comment: "I learnt so much from this!",
      rating: 10
    },
    {
      reviewId: "R33",
      comment: "WOW!!! EVERY GHC attendee should have attended this!",
      rating: 10
    },
    {
      reviewId: "R34",
      comment: "the speaker was great.",
      rating: 10
    },
    {
      reviewId: "R35",
      comment: "no",
      rating: 1
    },
    {
      reviewId: "R36",
      comment: "lovely!",
      rating: 10
    },
    {
      reviewId: "R37",
      comment: "just didn't rub off right",
      rating: 6
    },
    {
      reviewId: "R38",
      comment: "cool",
      rating: 10
    },
    {
      reviewId: "R39",
      comment: "would watch again!",
      rating: 10
    },
    
  ];