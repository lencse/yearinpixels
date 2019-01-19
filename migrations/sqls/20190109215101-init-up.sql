CREATE TABLE users (
    id                      UUID PRIMARY KEY,
    creation_date           TIMESTAMP WITH TIME ZONE NOT NULL
);

----------------------------------------

CREATE TABLE calendar_entries (
    id                      UUID PRIMARY KEY,
    mood                    SMALLINT NOT NULL,
    comment                 TEXT NOT NULL,
    user_id                 UUID NOT NULL REFERENCES users (id),
    calendar_day            DATE NOT NULL,
    ts                      BIGINT NOT NULL,
    creation_date           TIMESTAMP WITH TIME ZONE NOT NULL,
    UNIQUE (user_id, calendar_day, ts)
);

----------------------------------------

CREATE OR REPLACE VIEW calendar_entries_effective_ts AS
SELECT
    id AS entry_id,
    MAX(ts) OVER (PARTITION BY (user_id, calendar_day)) AS effective_ts,
    user_id,
    mood,
    comment,
    calendar_day,
    ts,
    creation_date
FROM calendar_entries;

----------------------------------------

CREATE OR REPLACE VIEW calendar_days AS
SELECT
    u.id || '/' || TO_CHAR(ceets.calendar_day, 'YYYYMMDD') AS id,
    u.id AS user_id,
    ceets.entry_id,
    ceets.mood,
    ceets.comment,
    ceets.calendar_day,
    ceets.ts
FROM
    users u,
    calendar_entries_effective_ts ceets
WHERE 1=1
    AND u.id = ceets.user_id
    AND ceets.effective_ts = ceets.ts;

----------------------------------------

CREATE OR REPLACE VIEW calendar_entries_to_del AS
SELECT
    entry_id
FROM
    calendar_entries_effective_ts
WHERE 1=1
    AND effective_ts != ts;
