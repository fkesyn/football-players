# football-player-api

## Build Setup

```bash
# install dependencies
$ npm install

# run node server on localhost:8081
$ node server.js


#endpoints

CREATE NEW PLAYER
POST /api/players
Body (JSON)
{
    "name": "*player Name*",
    "position" : "*Player position*",
    "overall": *(val between 1-100)*,
    "nationality": "*player country*"
}

LIST ALL PLAYERS
GET /api/players

response example:
[
    {
        "_id": "5eed4378c3818314984a2d47",
        "name": "quim",
        "position": "SS",
        "overall": 90,
        "nationality": "Portugal",
        "club": "no club",
        "createdAt": "2020-06-19T23:00:08.226Z",
        "updatedAt": "2020-06-19T23:00:08.226Z",
        "__v": 0
    }
],

FIND PLAYER BY ID
GET /api/players/:id

UPDATE PLAYER BY ID
PUT /api/players/:id

DELTE PLAYER BY ID
DELETE /api/players/:id

DELETE ALL PLAYERS
DELETE /api/players