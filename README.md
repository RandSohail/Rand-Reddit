#  Rand-Reddit

## :label: Site URL

> [Rand-Reddit](https://rand-reddit.herokuapp.com/) 

---
## User Story

- As a user you can see all posts on the home page.
- As a user you can sign up and login.
- As a user you don't need to be logged to view the posts,but need to be logged in to post.
- As a user you can delete their own posts.
- As a user you can click on a Create Post button and go to page to create a new Post.
-  As a user you can see his own profile.

---
## Tech Used

- npm 
- HTML5
- CSS3
- Java Script (JS)
- NodeJS
- ExpressJS
- Heroku
- Postgres SQL
---


## Schema 
#### Version1 users/posts

![](https://i.imgur.com/UbVt4hq.png)

#### Version2 users/posts/post_votes
![](https://i.imgur.com/o1M50Mw.png)



> :link: Link to the website where I draw my schema ➜ [DRAWSQL ](https://drawsql.app/rand-sohail/diagrams/redditclone) 

---
## To run the project locally

- git clone `https://github.com/GSG-G11/Rand-Reddit.git`
- cd `Rand-Reddit`
- npm i
- npm run dev
- Fill .env.example

---
## DataBase 

```sql=
CREATE DATABASE your_database_name;
\c -- to connect to database
CREATE USER user_name WITH SUPERUSER PASSWORD 'password';
ALTER DATABASE your_database_name OWNER TO user_name;
\i -- path from server/database/config/init.sql
```
