CREATE TABLE virus (
  id INTEGER,
  name VARCHAR(255)
);


INSERT INTO virus(id, name)
VALUES 
      (1, 'H1RT'),
      (2, 'H7H1'),
      (3, 'HUN8'),
      (4, 'XH1HX'),
      (5, 'XXXX');

/*\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

\\\\\\O CÓDIGO PARA ENVIAR PARA O BEECROWD É SÓ ESSE\\\\\*/     

SELECT CASE WHEN name LIKE '%H1%' THEN REPLACE(name, 'H1', 'X') ELSE name END AS name
FROM virus;
