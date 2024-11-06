# Ecosphere

Software required:

- [Git](https://git-scm.com/)
- [Node JS](https://nodejs.org/en/download/package-manager)
- [PNPM](https://pnpm.io/fr/installation)
- [MySQL](https://dev.mysql.com/downloads/installer/)

# Install project

- Install project dependencies

  ```bash
  pnpm install
  ```

- Creates a database user and a password

  ```sql
  CREATE USER 'ecosphere-user'@'localhost' IDENTIFIED BY 'ecosphere-password';
  ```

  - Allows user to connect to database

  ```sql
  GRANT ALL PRIVILEGES ON *.* TO 'ecosphere-user'@'localhost';
  ```

- Add an `.env` file at the root of the project, with the following variables

  - Database connection ([Prisma Docs](https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/relational-databases/connect-your-database-typescript-mysql))

  ```js
  DATABASE_URL=mysql://ecosphere-user:ecosphere-password@localhost:3306/ecosphere-db
  ```

- Generate the Prisma client

  ```bash
  pnpx prisma generate
  ```

- Run Prisma database migrations

  ```bash
  pnpx prisma migrate dev --name initial-migration
  ```

- Insert fixtures

  ```bash
  pnpm run fixtures
  ```

| Username | Password | Rôle |
| --- | --- | --- |
| user | User1234! | USER |
| admin | Admin1234! | ADMIN |

- Run server project

  ```bash
  pnpm run dev
  ```

- (optional)

  Clear your `localhost:3000` browser cookies is you have an error
