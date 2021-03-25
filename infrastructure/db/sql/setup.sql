CREATE SCHEMA data;

CREATE TABLE IF NOT EXISTS data.station (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar,
	"image_name" varchar,
	"sequence" varchar unique,
  "location" varchar,
  "created_at" date DEFAULT (now()),
	"market_id" INT NOT NULL
);

CREATE TABLE IF NOT EXISTS data.artist (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "name" varchar
);

CREATE TABLE IF NOT EXISTS data.breakout (
	"id" SERIAL NOT NULL,
	"name" varchar,
	"newName" varchar,
	"rank" int,
	"customRank" int,
	"respondents" int,
	"pop" int,
	"_2pop" int,
	"ptl" int,
	"unf" int,
	"neg" int,
	"ddl" int,
	"nop" int,
	"lik" int,
	"fav" int
);

CREATE TABLE IF NOT EXISTS data.callout (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"core_pop_rank" int,
	"total_pop_rank" int,
	"core_pop_score" int,
	"total_pop_score" int,
	"_6am_12m_spins" int,
	"_24hr_spins" int,
	"total_station_spins" int,
	"total_market_spins" int
);


CREATE TABLE IF NOT EXISTS data.omt (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"core_pop_rank" int,
	"total_pop_rank" int,
	"core_pop_score" int,
	"total_pop_score" int,
	"_6am_12m_spins" int,
	"_24hr_spins" int,
	"total_station_spins" int,
	"total_market_spins" int
);

CREATE TABLE IF NOT EXISTS data.genre (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"name" varchar
)

CREATE TABLE IF NOT EXISTS data.song (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "artist_id" int NOT NULL REFERENCES data.artist(id),
	"genre_id" int NOT NULL REFERENCES data.genre(id),
  "title" varchar,
	"thumbs_up" varchar DEFAULT '0',
	"thumbs_down" varchar DEFAULT '0',
	"completed" varchar DEFAULT '0',
	"hit_predictor" varchar DEFAULT '0',
	"market_24h_spins" int DEFAULT 0,
	"market_total_24h_spins" int DEFAULT 0
);



CREATE TABLE IF NOT EXISTS data.breakout_to_callout (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"breakout_id" INT NOT NULL REFERENCES data.breakout(id),
	"callout_id" INT NOT NULL REFERENCES data.breakout(id),
);


CREATE TABLE IF NOT EXISTS data.breakout_to_omt (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"breakout_id" INT NOT NULL REFERENCES data.breakout(id),
	"callout_id" INT NOT NULL REFERENCES data.breakout(id),
);

CREATE TABLE IF NOT EXISTS data.breakout_group (
	"id" SERIAL PRIMARY KEY NOT NULL,
	"song_id" INT NOT NULL,
	"week_of_research" timestamp
	"callout_id" INT NOT NULL REFERENCES data.callout(id),
	"omt_id" INT NOT NULL REFERENCES data.omt(id),
);


INSERT INTO data.artist (name)
  VALUES
   ('J. Cole'), --1
   ('Notorious B.I.G'), --2
   ('Kendrick Lamar'); --3

INSERT INTO data.station (market_id, name, sequence, location, image_name)
  VALUES
   (1, 'WFPP The Sound', 'WFPP', 'Wisconsin', 'wfpp.webp'), --1
   (2, 'Rock 105.3', 'XMLA', 'San Diego', '1053.webp'), --2
   (2, 'Channel 99.3', 'QOER', 'San Diego', 'sd-933.webp'); --6

INSERT INTO data.song (artist_id, genre_id, title)
  VALUES
		(1, 1, 'Middle Child'),
		(1, 1, 'K.O.D'),
		(1, 1, 'No Role Modelz'),
		(1, 1, 'Work Out'),
		(1, 1, 'Photograph'),
		(1, 1, 'Kevin''s Heart'),
		(1, 1, 'Window Pain'),
		(1, 1, 'FRIENDS'),
		(1, 1, 'ATM'),
		(1, 1, 'Motivate'),
		(1, 1, 'Wet Dreamz'),
		(1, 1, 'Fire Squad'),
		(1, 1, 'G.O.M.D'),
		(1, 1, 'Apparently'),
		(1, 1, 'Love Yourz'),
		(1, 1, 'Power Trip'),
		(1, 1, 'Chaining Day'),
		(1, 1, 'Crooked Smile'),
		(2, 1, 'Whatchu Want'),
		(2, 1, 'Born Again'),
		(2, 1, 'Gimmie the Loot'),
		(2, 1, 'Come On'),
		(2, 1, 'Who Shot Ya?'),
		(2, 1, 'Hypotize'),
		(2, 1, 'Big Poppa'),
		(2, 1, 'Life After Death'),
		(2, 1, 'Somebody''s Gotta Die'),
		(2, 1, 'I Got a Story to Tell'),
		(2, 1, 'Notorious Thugs'),
		(2, 1, 'Going Back to Cali'),
		(2, 1, 'Ten Crack Commandments'),
		(2, 1, 'My Downfall'),
		(2, 1, 'Long Kiss Goodnight'),
		(2, 1, 'Mo Money Mo Problems'),
		(2, 1, 'Machine Gun Funk'),
		(3, 1, 'Backseat Freestyle'),
		(3, 1, 'The Art of Peer Pressure'),
		(3, 1, 'Poetic Justice'),
		(3, 1, 'Money Trees'),
		(3, 1, 'good kid'),
		(3, 1, 'm.A.A.d. City'),
		(3, 1, 'Swimming Pools'),
		(3, 1, 'Compton'),
		(3, 1, 'Black Boy Fly'),
		(3, 1, 'The Recepie'),
		(3, 1, 'Money Trees'),
		(3, 1, 'Hol Up'),
		(3, 1, 'Ronald Regan Era'),
		(3, 1, 'Chapter Six'),
		(3, 1, 'Chapter Ten'),
		(3, 1, 'Tammy''s Song'),
		(3, 1, 'Hii Power');

INSERT INTO data.breakout ( name, newName, rank, customRank, respondents, pop, _2pop, ptl, unf, neg, ddl, nop, lik, fav)
	VALUES
		('name', 'newName', 21, 12, 1, 9, 8, 7, 6, 5, 4, 3, 2, 1);