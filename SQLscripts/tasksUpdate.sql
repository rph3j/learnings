/* import data from file */
/* mysql -u DBcon -p learnings < learnings.sql */
/* WORNING! learnings.sql is containing in SQLscripts folder. Make sure you are in this folder when you run this comand or change the path*/
DELETE FROM userAnswers;
DELETE FROM tasks;

INSERT INTO tasks(TASK,ANSWER,TYPE) VALUES
("6+12","18","add"),
("11+17","28","add"),
("13+8","21","add"),
("17+7","24","add"),
("20+6","26","add"),
("4x4","16","multi"),
("4X5","20","multi"),
("3x8","24","multi"),
("3x5","15","multi"),
("4x7","28","multi"),
("23-12","11","sub"),
("22-6","16","sub"),
("34-8","26","sub"),
("32-22","10","sub"),
("44-18","26","sub");