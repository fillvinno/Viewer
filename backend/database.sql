
create TABLE person(
    id SERIAL PRIMARY KEY,
    nickname VARCHAR(255),
    email VARCHAR(255),
    person_password VARCHAR(255),
    channel_id INTEGER,
    FOREIGN KEY (channel_id) REFERENCES channel (id)
);

create TABLE channel(
    id SERIAL PRIMARY KEY,
    channel_name VARCHAR(255),
    createDate DATE,
    channel_description VARCHAR(255),
    views INTEGER,
    followers INTEGER,
    followings INTEGER[],
    owner_id INTEGER,
    FOREIGN KEY (owner_id) REFERENCES person (id)
);

create TABLE video(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    video_description VARCHAR(255),
    channel VARCHAR(255),
    views INTEGER,
    likes INTEGER,
    channel_id INTEGER,
    FOREIGN KEY (channel_id) REFERENCES channel (id)
);

create TABLE playlist(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    playlist_description VARCHAR(255),
    channel VARCHAR(255),
    channel_id INTEGER,
    FOREIGN KEY (channel_id) REFERENCES channel (id)
);

create TABLE token(
    id SERIAL PRIMARY KEY,
    token VARCHAR(255),
    expire_at DATE,
    person_id INTEGER,
    FOREIGN KEY (person_id) REFERENCES person (id)
);