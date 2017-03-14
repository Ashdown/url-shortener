# Url Shortener Code Test
=========================

A URL shortening service.
- It should have a route where you can send a POST request with a URL in the
  body, which returns a short URL.

e.g.
```
curl localhost:4000 -XPOST -d '{ "url": "http://www.farmdrop.com" }'
{ "short_url": "/abc123", "url": "http://www.farmdrop.com" }
```

- When you send a GET request to a previously returned URL, it should redirect
  to the POSTed URL.

e.g.
```
curl -v localhost:4000/abc123
...
< HTTP/1.1 301 Moved Permanently
...
< Location: http://www.farmdrop.com
...
{ "url": "http://www.farmdrop.com" }
```

Getting Started
---------------

Install dependencies

`bundle install`

Initialise Postgres

`initdb -D /usr/local/var/postgres/`

Create Development db
 
`createdb Development`

Migrate sample table to Development

`db:migrate`

Run locally

`foreman start web`


Helpful Commands
----------------

Create a new Heroku app

`heroku create`

Deploy App

`git push heroku master`

Open App

`heroku open`

Set environment variable

`heroku config:set FOO=BAR`

For more see

[Getting started with Ruby on Heroku](https://devcenter.heroku.com/articles/getting-started-with-ruby)

Database Integration
--------------------

For more see

[Making a simple database driven website with sinatra and heroku](https://samuelstern.wordpress.com/2012/11/28/making-a-simple-database-driven-website-with-sinatra-and-heroku/)  
[Using postgres on Heroku](https://devcenter.heroku.com/articles/heroku-postgresql#provisioning-the-add-on)




    