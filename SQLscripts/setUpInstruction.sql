/* After instalation mara db server */

/* log in on root user -> mysql -u root -p*/

/*create databse and use it*/

create databse learnings;
use learnings

/*create user DBcon with password DBconPass and giwe him/her all grants to learnings DB*/

create user DBcon@localhost identified BY 'DBconPass';
GRANT ALL ON learnings.* TO DBcon@localhost;

/* exit from mariadb terminal*/

/* import data from file */
/* mysql -u DBcon -p learnings < laernings.sql */
/* WORNING! learnings.sql is containing in SQLscripts folder. Make sure you are in this folder when you run this comand or change the path*/