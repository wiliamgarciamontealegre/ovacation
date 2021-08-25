/*SQL para la consulta del punto 3*/
SELECT J.nombre, E.nombre as nombre_equipo, p.fecha_partido FROM equipos as E
JOIN jugadores as J ON J.fk_equipos = E.id_equipos
INNER JOIN partidos as P ON p.fk_equipo_local = E.id_equipos

/* SQL para la consulta del punto 4 */
SELECT E.nombre FROM equipos AS E
WHERE 5 < (SELECT COUNT(*) FROM fk_equipo_local WHERE fk_equipo_local = C.id_equipos)