SELECT name,age FROM users where users.age > 30 AND users.city = "Gotham";
SELECT name,age FROM users where users.city IN ('Metropolis', 'Wakanda');
SELECT name FROM users where users.age > 40 ORDER BY name DESC;
INSERT INTO users (name,age,city) VALUES ('Katar Hol', 35, 'Thanagar');
SELECT name,age FROM users where users.city = 'Thanagar';
DELETE FROM users where id = 38; /* hard coded, didn't implement a way to get last inserted ID */
SELECT name,age FROM users where users.city = 'Thanagar';
