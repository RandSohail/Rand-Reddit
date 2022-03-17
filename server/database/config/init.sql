BEGIN;

DROP TABLE IF EXISTS users, posts, post_votes CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (100) NOT NULL UNIQUE,
  email VARCHAR (255) NOT NULL UNIQUE,
  password VARCHAR NOT NULL,
  profile_image VARCHAR(255) DEFAULT 'https://i.redd.it/snoovatar/avatars/7b3b60e7-1ddf-43fa-83cf-dc5fb887e3c4.png'
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) 
);

CREATE TABLE post_votes(
  user_id int NOT NULL,
  post_id int NOT NULL,
	vote_value int DEFAULT 0 check (-1 <= vote_value and vote_value <= 1),
  primary key (user_id, post_id),
  FOREIGN KEY (user_id) REFERENCES users(id) on delete cascade,
 FOREIGN KEY (post_id) REFERENCES posts(id) on delete cascade
);

COMMIT;