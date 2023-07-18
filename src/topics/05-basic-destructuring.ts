
// destructuring objects
// ---------------------
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    details: {
        author: "Ed Sheeran",
        year: 2015
    },
    song: "Mess",
    songDuration: 96
};

// const song = "New Song";

const {
    song: anotherSong,
    songDuration:duration,
    details
} = audioPlayer;

const { author } = details;

// console.log( author );
// console.log(anotherSong );
// console.log( duration );

// destructuring arrayss

// const dbz = ['Goku','Vegeta', 'Trunks'];

const dbz = ['Goku','Vegeta'];
const [  ,,trunks = 'Not Found' ] = dbz;

console.log('character 3::: ', trunks);



export {};
