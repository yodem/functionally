// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { Firestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCEfOUxx7PEJFH6VIhoFmPk0h5_gXG068Y',
  authDomain: 'functionally-9ae03.firebaseapp.com',
  projectId: 'functionally-9ae03',
  storageBucket: 'functionally-9ae03.appspot.com',
  messagingSenderId: '1019367030967',
  appId: '1:1019367030967:web:0f22b3672e47e3f7a24d32',
  measurementId: 'G-MQPNK3SSNR',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db: Firestore = getFirestore(app); // Explicitly typed

export { db };

// async function initializeGame() {
//   try {
//     // Fetch students and cards
//     const students = await fetchStudents();
//     const functionCards = await fetchCards(CardType.Function);
//     const numberCards = await fetchCards(CardType.Number);

//     console.log(' Test ', shuffleArray(numberCards));

//     // Initialize the first game
//     const game: GameState = {
//       currentPlayer: '', // This will be set when the first player is decided
//       players: students.map((student, index) => ({
//         id: student.id,
//         hand: shuffleArray(numberCards).slice(0, 5),
//         currentFunctionCard: getRandomCard(functionCards),
//         score: 0,
//       })),
//       deckStates: {
//         numberDeck: shuffleArray(numberCards),
//         functionDeck: shuffleArray(functionCards),
//       },
//       playedCards: [],
//       // attackState will be set when the first attack phase begins
//     };

//     // Add the game to the 'games' collection in Firestore
//     const docRef = await addDoc(collection(db, 'games'), game);

//     // Log the ID of the new game
//     console.log('Created new game with ID:', docRef.id);

//     // Return the new game with the ID set
//     return { ...game, id: docRef.id };
//   } catch (error) {
//     console.error('Error initializing game:', error);
//     throw error;
//   }
// }

// initializeGame();

const cardsData = {
  numbers: [
    { type: 'number', value: 0 },
    { type: 'number', value: 1 },
    { type: 'number', value: -1 },
    { type: 'number', value: 2 },
    { type: 'number', value: -2 },
    { type: 'number', value: 3 },
    { type: 'number', value: -3 },
    { type: 'number', value: 4 },
    { type: 'number', value: -4 },
    { type: 'number', value: 5 },
    { type: 'number', value: -5 },
    { type: 'number', value: 6 },
    { type: 'number', value: -6 },
    { type: 'number', value: 7 },
    { type: 'number', value: -7 },
    { type: 'number', value: 1 / 2 },
    { type: 'number', value: -1 / 2 },
    { type: 'number', value: 2 / 3 },
    { type: 'number', value: -2 / 3 },
    { type: 'number', value: 3 / 4 },
    { type: 'number', value: -3 / 4 },
    { type: 'number', value: 4 / 5 },
    { type: 'number', value: -4 / 5 },
    { type: 'number', value: 2 },
    { type: 'number', value: -2 },
    { type: 'number', value: 3 },
    { type: 'number', value: -3 },
    { type: 'number', value: 4 },
    { type: 'number', value: -4 },
    { type: 'number', value: 5 },
    { type: 'number', value: -5 },
    { type: 'number', value: 6 },
    { type: 'number', value: -6 },
    { type: 'number', value: 7 },
    { type: 'number', value: -7 },
    { type: 'number', value: 11 },
    { type: 'number', value: -11 },
    { type: 'number', value: 13 },
    { type: 'number', value: -13 },
    { type: 'number', value: 17 },
    { type: 'number', value: -17 },
    { type: 'number', value: 19 },
    { type: 'number', value: -19 },
    { type: 'number', value: 2.5 },
    { type: 'number', value: -2.5 },
    { type: 'number', value: 3.5 },
    { type: 'number', value: -3.5 },
    { type: 'number', value: 4.5 },
    { type: 'number', value: -4.5 },
    { type: 'number', value: 5.5 },
    { type: 'number', value: -5.5 },
    { type: 'number', value: 7.5 },
    { type: 'number', value: -7.5 },
  ],
};
