
# target test - for testing the project
test:
	poetry run python -m src.backend.manage test

# target run - for running the development server on 8000 port
run:
	poetry run python -m src.backend.manage runserver

migrations: 
	poetry run python -m src.backend.manage makemigrations

# target migrate - for applying migrations
migrate: migrations
	poetry run python -m src.backend.manage migrate