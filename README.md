# SENDITAPI [![Build Status](https://travis-ci.com/helpybruce/senditapi.svg?branch=develop)](https://travis-ci.com/helpybruce/senditapi) [![Coverage Status](https://coveralls.io/repos/github/helpybruce/senditapi/badge.svg?branch=develop)](https://coveralls.io/github/helpybruce/senditapi?branch=develop) [![Maintainability](https://api.codeclimate.com/v1/badges/e4f08a109cd87b28ddd8/maintainability)](https://codeclimate.com/github/helpybruce/senditapi/maintainability)

SendIT is a courier service that helps users deliver parcels to different destinations.

# Sendit API Standards

- [Setup Instructions](#instructions)
- [RESTful URLs](#restful-urls)
- [Request & Response Examples](#request--response-examples)

## Setup Instructions


Install dependencies:

```sh
$ npm install
```

Startup the Server:

```sh
$ npm start
```

Run Tests:

```sh
$ npm run test
```

## RESTful URLs

| Method | Endpoint | Description
| --- | --- | -- |
| GET | /api/v1/parces | List all parcels |
| GET | /api/v1/parcels/:parcelId | Query one parcel |
| POST | /api/v1/parcels | Create a parcel order |
| PUT | /api/v1/parcels/:parcelId/cancel | Cancel a parcel order |
| DELETE | /api/v1/parcels/:parcelId | Delete a parcel order |
| GET | /api/v1/users | List all users |
| POST | /api/v1/users/register | Register a new user |
| POST | /api/v1/users/login | Login a user |
| GET | /api/v1/users/:userId/parcels | Query user's parcels |

## Request & Response Examples

### API Resources

  - [GET /parcels](#get-parcels)
  - [GET /parcelId](#get-oneparcel)

### GET /parcels
Example: https://senditbruceapi.herokuapp.com/api/v1/parcels

Response body:

    {
      "message": "List of all parcels",
      "parcels": [
          {
              "id": 1,
              "pickupLocation": "Kigali, KG Avenue 25 est",
              "destinationLocation": "Nyanza, Nyanza Rd",
              "weight": "15 g",
              "quantity": "5",
              "status": "pending",
              "comment": "Laptop cables"
          },
          {
              "id": 2,
              "pickupLocation": "Kacyiru Library",
              "destinationLocation": "Muhanga district Library",
              "weight": "2 kg",
              "quantity": "20",
              "status": "pending",
              "comment": "Books"
          },
          {
              "id": 3,
              "pickupLocation": "Nyagatare",
              "destinationLocation": "Huye, National Museum",
              "weight": "800 g",
              "quantity": "2",
              "status": "pending",
              "comment": "Statues"
          },
          {
              "id": 4,
              "pickupLocation": "Kigali, KG Avenue 5",
              "destinationLocation": "Musanze Hospital",
              "weight": "150 g",
              "quantity": "1",
              "status": "pending",
              "comment": "Laptop"
          }
      ]
    }

### GET /parcelId

Response body:
Example: https://senditbruceapi.herokuapp.com/api/v1/parcels/1

    {
      "message": "parcel found",
      "parcel": {
          "id": 1,
          "pickupLocation": "Kigali, KG Avenue 25 est",
          "destinationLocation": "Nyanza, Nyanza Rd",
          "weight": "15 g",
          "quantity": "5",
          "status": "pending",
          "comment": "Laptop cables"
      }
    }

### nyc coverage reports

![](allpass.PNG)
