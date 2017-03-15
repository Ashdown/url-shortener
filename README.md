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

Links
-----
[App on Heroku](https://blooming-oasis-41546.herokuapp.com/pdated )

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

Install jsx compiler

`npm install -j jsx`

Run the rake command

`rake compilejsx`

Run locally

`foreman start web`