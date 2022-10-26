  <strong>
    <h1 align="center" >create-express-ts-api</h3>
<p align="center">
    <strong>
      A starter to kit for developing  REST API in typescript and express.
  </p>
<!-- PROJECT SHIELDS -->
<br></br>

![restapi](https://user-images.githubusercontent.com/72249059/197589566-b2de5f90-1ddb-4d89-9811-e4da022bdd54.jpg)


<br />

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#getting-started">Getting Started </a>
    </li>
    <li>
      <a href="#Tech-Stack-Used">Tech stack used</a>
    </li>
    <li><a href="#Understanding-the-folder-structure">Understanding the folder structure</a></li>
    <li><a href="#Setting-up-Development-DB">Setting up Development DB</a></li>
    <li><a href="#Documentation">Documentation</a></li>
  </ol>
</details>

---
## Getting Started

Follow the instructions to set up the project on your local machine.

### Prerequisites

Install [NodeJS LTS](https://nodejs.org/en/)

- npm

  ```sh
  npm install npm@latest -g
  ```

### Initializing the project

1. Initiate your project by using the following npm command:

   ```sh
   npx create-express-ts-api  <project-name>
   ```

   example : `npx create-express-ts-api Firstapi`

3. Install NPM packages

   ```sh
   npm install
   ```

4. Start the react and nodejs server concucrrently

   ```sh
   npm run dev
   ```
   
   
---   
### Tech Stack Used

- [Node.js](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Express.js](https://expressjs.com/en/starter/hello-world.html)
- [Prisma (as ORM)](https://www.prisma.io/docs/getting-started)

---   
## Understanding the folder structure 

It is a  starter to kit for developing REST API in typescript and express, where you can build your own rest api
 - routes
 - controllers
 - models
 - prisma
 - database

---
### Setting up Development DB

To setup the DB follow the steps:
1. To set up the development DB make sure you have docker and docker-compose installed in your system.

2. Add a .env file at the root of the project and add a Database URL in the file

```sh
PORT=3000
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb"
```

To Trigger the Development DB Setup run following commands 
```sh
npm run dev:db
npm run db-generate
```
---
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Refer to this [Contribution.md](https://github.com/sarthakjdev/create-express-ts-api/blob/main/Contributing.md) if you have any difficulty in making a pull request

## License

Distributed under the MIT License. See [`LICENCE`](https://github.com/sarthakjdev/create-express-ts-api/blob/main/LICENSE) for more information.

---

## Contact

Rishabh malhotraa - [@sarthakjdev](https://twitter.com/sarthakjdev) 

Email Id : contact.sarthakjain@gmail.com

Discord : Sarthak Jain#2443

LinkedIn: [LinkedIn](https://www.linkedin.com/in/sarthakjdev/)

---
## Documentation

To know more details about it refer to the blog: [Hashnode](https://blog.sarthakjdev.com/develop-rest-apis)







