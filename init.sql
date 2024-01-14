
CREATE TABLE champions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    imageUrl VARCHAR(255) NOT NULL
);

INSERT INTO champions (name, description, imageUrl) VALUES ('Ahri', 'Ahri is a charismatic champion with magical abilities.', 'https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/Ahri.png');
INSERT INTO champions (name, description, imageUrl) VALUES ('Ezreal', 'Ezreal is an adventurous explorer armed with arcane abilities.', 'https://ddragon.leagueoflegends.com/cdn/11.22.1/img/champion/Ezreal.png');
