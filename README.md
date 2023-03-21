# budget-api

Calculates the budget based on the selected user and the prices of the chosen products.

[Installation Guide](#installation-guide) |
[How to Run](#how-to-run) |
[Technologies](#technologies) |
[API Endpoints](#api-endpoints)

## Installation Guide

- Clone this repository
- Run `npm i` to installl dependencies

## How to Run

### Locally

- Run `npm run dev` to start the local server

### Unit tests

- Run `npm run test` to run the tests once
- Run `npm run test:watch` to run the tests each time the code is saved

## Technologies

[![Technologies](https://skillicons.dev/icons?i=nodejs,express,ts,jest)](https://skillicons.dev)

## API Endpoints

| HTTP Verbs             | Endpoints   | Action                |
| ---------------------- | ----------- | --------------------- |
| [GET](#get-users)      | /users      | List users            |
| [GET](#get-products)   | /products   | List products         |
| [POST](#post-budgetid) | /budget/:id | Calculates the budget |

---

### `GET /users`

### Request:

```bash
http://localhost:5000/users
```

### Response:

```json
[
	{
		"id": "number",
		"name": "string",
		"tax": "number"
	}
]
```

---

### `GET /products`

### Request:

```bash
http://localhost:5000/products
```

### Response:

```json
[
	{
		"id": "number",
		"name": "string",
		"price": "number"
	}
]
```

---

### `POST /budget/:id`

### Request:

```bash
http://localhost:5000/budget/<userId>
```

- body:

```json
{
	"productsIds": ["number"]
}
```

### Response:

```json
{
	"total": "number"
}
```
