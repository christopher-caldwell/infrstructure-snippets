const db = require('../../config/db')

const fetchSong = songId => {
		return db.select(
			"song_id",
			"song_name",
			"artist_name",
			"song_image_url",
			"artist_image_url",
		)
		.from('data.songs')
		.innerJoin('data.artists', 'data.artists.artist_id', 'data.song.artist_id')
		.where('data.songs.song_id', songId)
}

module.exports = fetchSong