## :running: welcome.

Welcome to my demo for the take home challenge! It uses `docker` & `docker-compose` to make your life for setting it up extremely easy. These are the only dependencies you need for this project.

Head over to one of these links
([mac link](https://docs.docker.com/docker-for-mac/install/) or [windows link](https://docs.docker.com/docker-for-windows/install/)) to grab a copy of docker if you don't have these utilities already.

Depending on your OS you may have to install compose seperately, if that's the case head [here](https://docs.docker.com/compose/install/).

## :wrench: Setup

Clone the project

```
git clone https://github.com/BennettDixon/tellus_takehome;
cd tellus_takehome;
```

Run the container network, this will build them the first time so be patient while images are downloaded and containers are built

```
docker-compose up
```

This will spin containers up, but you will see an error printed to the screen telling you `ROLE postgres_user DOES NOT EXIST`. Do not fret, follow these steps, this is intended. We need to setup the table and database for the backend to populate with testdata.

Locate the postgres container id using

```
docker ps
```

You can either use the name of the container or the id of the container to substitute in the next portion. The name should be something like `tellus_takehome_postgres_1` and is under the `NAMES` column, the id is under `CONTAINER ID` and is a random alpha-numeric hash.

Execute the following, substituting your postgres container id or container name. This will setup a user and database in your postgres container. You only need to do this once unless you delete the docker-compose volume mount or the postgres data on your local machine.

```
docker exec <postgres-container-id/name> psql -U postgres -f /app/pgsetup.sql
```

Once the role is created the backend will load the test data into postgres after performing the migrations; this is all you need to do!

The React view is located at `localhost:8800`

Visit the GraphQL endpoint `localhost:8800/graphql/v1/` and play with GraphQL Queries if you wish!

Feel free to add objects to the `/nginx_router/backend/testdata.json` file for further testing! They will be loaded in each time you boot the containers.

You can also dynamically load data the same way you executed the postgres setup due to volume mounting. Find the id or name of the `backend` container, likely something like `tellus_takehome_backend_1`.

Then run the following:

```
docker exec <backend-container-id/name> python manage.py loaddata testdata.json
```

### Shutting it down

```
docker-compose down
```
