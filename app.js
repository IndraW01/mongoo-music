
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Schema for Songs collection
const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  album: String,
});

const Song = mongoose.model('Song', songSchema);

// Define Schema for Artists collection
const artistSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  genres: [String],
});

const Artist = mongoose.model('Artist', artistSchema);

// Define Schema for Popular Songs collection
const popularSongSchema = new mongoose.Schema({
  title: String,
  playCount: Number,
  period: String,
});

const PopularSong = mongoose.model('PopularSong', popularSongSchema);

// Insert sample data
const seedDatabase = async () => {
  try {
    // Sample data for Songs collection
    const songsData = [
      { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
      { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
      { title: 'Song 3', artist: 'Artist 3', album: 'Album 2' },
      { title: 'Song 4', artist: 'Artist 4', album: 'Album 2' },
      { title: 'Song 5', artist: 'Artist 5', album: 'Album 2' },
      { title: 'Song 6', artist: 'Artist 6', album: 'Album 6' },
      { title: 'Song 7', artist: 'Artist 7', album: 'Album 7' },
      { title: 'Song 8', artist: 'Artist 8', album: 'Album 8' },
      { title: 'Song 9', artist: 'Artist 9', album: 'Album 9' },
      { title: 'Song 10', artist: 'Artist 10', album: 'Album 10' },
      // Add more songs data
    ];

    // Sample data for Artists collection
    const artistsData = [
      { name: 'Artist 1', dateOfBirth: new Date('1990-01-01'), genres: ['Genre 1', 'Genre 2'] },
      { name: 'Artist 2', dateOfBirth: new Date('1985-05-10'), genres: ['Genre 3', 'Genre 4'] },
      // Add more artists data
    ];

    // Sample data for Popular Songs collection
    const popularSongsData = [
      { title: 'Popular Song 1', playCount: 100, period: 'July 2023' },
      { title: 'Popular Song 2', playCount: 80, period: 'July 2023' },
      // Add more popular songs data
    ];

    // Insert data into respective collections
    await Song.insertMany(songsData);
    await Artist.insertMany(artistsData);
    await PopularSong.insertMany(popularSongsData);

    console.log('Database populated successfully!');
  } catch (error) {
    console.error('Error populating database:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.connection.close();
  }
};

// Call the seedDatabase function to populate the database
seedDatabase();
