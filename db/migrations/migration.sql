\c designer_assistant

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_digest TEXT NOT NULL,
  firstname VARCHAR(255),
  lastname VARCHAR(255)
);


CREATE TABLE IF NOT EXISTS googleFonts
(
  id SERIAL PRIMARY KEY,
  family VARCHAR(255),
  category VARCHAR(255),
  variants VARCHAR(255),
  regular TEXT,
  user_id INTEGER REFERENCES users(id)
);


CREATE TABLE IF NOT EXISTS behance
(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  url TEXT,
  fields VARCHAR(255),
  colors TEXT,
  user_id INTEGER REFERENCES users(id)
);







