CREATE TABLE dimensions(
	id INTEGER PRIMARY KEY,
	name varchar(255)
);

CREATE TABLE life_registry(
	id INTEGER PRIMARY KEY,
	name VARCHAR(255),
	omega NUMERIC,
	dimensions_id INTEGER REFERENCES dimensions (id)
);


INSERT INTO dimensions(id, name)
VALUES 
      (1, 'C774'),
      (2, 'C784'),
      (3, 'C794'),
      (4, 'C824'),
      (5, 'C875');
      
INSERT INTO life_registry(id, name, omega, dimensions_id)
VALUES
	  (1, 'Richard Postman', 5.6, 2),	
	  (2, 'Simple Jelly', 1.4, 1),	
	  (3, 'Richard Gran Master', 2.5, 1),	
	  (4, 'Richard Turing', 6.4, 4),	
	  (5, 'Richard Strall',	1.0, 3);

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

\\\\\\O CÓDIGO PARA ENVIAR PARA O BEECROWD É SÓ ESSE\\\\\*/     

SELECT life_registry.name, TRUNC((life_registry.omega * 1.618), 3)::TEXT AS "Fator N"
FROM life_registry
INNER JOIN dimensions ON dimensions.id = life_registry.dimensions_id
WHERE (dimensions.name = 'C774' OR dimensions.name = 'C875') AND life_registry.name LIKE 'Richard %'
ORDER BY "Fator N" ASC;