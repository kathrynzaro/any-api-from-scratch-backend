-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`

DROP table if exists charts;

CREATE table charts (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  age INT NOT NULL,
  birthday VARCHAR NOT NULL,
  sun VARCHAR NOT NULL,
  moon VARCHAR NOT NULL,
  rising VARCHAR NOT NULL,
  venus VARCHAR NOT NULL
);

INSERT INTO charts (name, age, birthday, sun, moon, rising, venus) VALUES
('Kat', 28, 'July 7, 1994', 'Cancer', 'Cancer', 'Leo', 'Leo'),
('Joe', 25, 'October 2, 1996', 'Libra', 'Gemini', 'Cancer', 'Leo'),
('Camille', 31, 'October 30, 1990', 'Scorpio', 'Pisces', 'Virgo', 'Scorpio'),
('Rob', 31, 'December 10, 1990', 'Sagittarius', 'Libra', 'Cancer', 'Sagittarius'),
('Raquel', 63, 'August 23, 1958', 'Leo', 'Sagittarius', 'Pisces', 'Leo'),
('John', 67, 'May 25, 1955', 'Gemini', 'Leo', 'Scorpio', 'Taurus'),
('Kashi', 29, 'December 5, 1992', 'Sagittarius', 'Aries', 'Gemini', 'Capricorn');