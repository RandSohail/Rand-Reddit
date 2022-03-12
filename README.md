# Rand-Reddit

## Schema 
#### V-1-Schema users/posts

![](https://i.imgur.com/UbVt4hq.png)

> :link: Link to the website where I draw my schema ➜ [DRAWSQL ](https://drawsql.app/rand-sohail/diagrams/redditclone) 

## DataBase 

```sql=
CREATE DATABASE your_database_name;
\c -- to connect to database
CREATE USER user_name WITH SUPERUSER PASSWORD 'password';
ALTER DATABASE your_database_name OWNER TO user_name;
\i -- path from server/database/config/init.sql
```