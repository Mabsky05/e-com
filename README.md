# E-commerce Backend

![alt text](Assets/sample.jpg)

## Video Walkthrough
https://youtu.be/3lLjXxWZeG4

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Summary
NodeJS-based e-commerce backend application. 
<Br><Br>

## Description 
An application for seeding, updating, and modifying e-commerce data. 

Using Node and npm extensions: the application is seeded with preliminary product-related data. 

Using Insomnia: This data can be viewed and modified.
<Br><Br>

## Instructions

### Pre-requisites
Visual Studio to run code. 
Node.js installed
MySQL installed
Insomnia installed
<Br>

### NPM Installations
NPM install: express, mysql2, sequelize, dotenv
<Br>

### Execution: Seeding from root and Execution
Use MySQL to run 'source db/schema.sql' and establish database. 
Run 'node seeds/index.js' to seed database.   
<Br>

### Execution: Insomnia
Use the following method/address combinations to access/edit the application database:

Access all products, categories or tags:<Br>
GET: http://localhost:3001/api/products<Br>
GET: http://localhost:3001/api/categories<Br>
GET: http://localhost:3001/api/tags<Br>
<Br>
Access individual product, category, or tag, where X is the id of the item:<Br>
GET: http://localhost:3001/api/products/X<Br>
GET: http://localhost:3001/api/categories/X<Br>
GET: http://localhost:3001/api/tags/X<Br>
<Br>
Post new product, category, or tag:<Br>
POST: http://localhost:3001/api/products<Br>
POST: http://localhost:3001/api/categories<Br>
POST: http://localhost:3001/api/tags<Br>
<Br>
Update product, category, or tag, where x is the id of the item:<Br>
PUT: http://localhost:3001/api/products/X<Br>
PUT: http://localhost:3001/api/categories/X<Br>
PUT: http://localhost:3001/api/tags/X<Br>
<Br>
Delete product, category, or tag, where x is the id of the item:<Br>
DELETE: http://localhost:3001/api/products/X<Br>
DELETE: http://localhost:3001/api/categories/X<Br>
DELETE: http://localhost:3001/api/tags/X<Br>
<Br>


## Contact
grimdango@gmail.com
<Br>
## Log 

### 19/03/22
Completed. Added README. Cleaned up code. 

### 10-17/03/22
Adding and fixing routes.

### 08/03/22
Initiated project

   

