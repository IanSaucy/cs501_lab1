# Lab 1
This is a small Frontend + Backend app that we will use to demonstrate some topics around the connection between the frontend of an application and the backend. Very similar to our HW 1 but touch more advanced. 

# Setup Instructions

You will need to setup two different things,

- Backend in Python
- Frontend in Node + React

## Clone Repo:

First clone this repo

> `git clone https://github.com/IanSaucy/cs501_lab1.git`

## Backend Setup

You will need the following system dependencies to get the backend code working:

- Python 3.9
- Pipenv (Preferred but not required )

If you don't have `pipenv` see docs [here](https://pipenv.pypa.io/en/latest/install/) for installing

### Setup with `pipenv`

In a terminal navigate into the backend folder then run the following command

> `pipenv update`

> `pipenv shell`

You should now have all the dependencies! You have also entered an interactive shell in the virtual environment, meaning you have access to all the dependencies etc specified in the Pipefile.

### Setup without `pipenv`

To utilize your favorite virtual environment manager or pip directly you can just leverage the `requirements.txt` file directly. Simply run

> `pip install -r requirements.txt`

### Run Backend

Now that you have the dependencies you can start the API. While still in the backend folder run the following command

> `uvicorn main:app --reload`

If all things went well you should see some status messages in the terminal indicating that the API is running. You can test it via the following URL

> `127.0.0.1:8000/test`


## Frontend Setup

The frontend was built using Node, React and Typescript. You will need the following

- Node >= 10
- npm >= 6 (comes with Node typically)
- Typescript >= 3.7

You'll also probably want a typescript friendly editor, such as VS Code.

### Frontend Install

In your terminal navigate into the frontend directory

> `cd frontend`
Now install all the packages for `npm`
> `npm install`

When that is complete you should be able to run the following command to start the server. You should see a login page. The website is located at `127.0.0.1:3000`

> `npm start`


# Questions

Any questions can be asked on Piazza!

# Credits

Login Page Starter Code: https://surajsharma.net/blog/react-login-form-typescript

FastAPI Starter Code: https://fastapi.tiangolo.com/tutorial/sql-database

