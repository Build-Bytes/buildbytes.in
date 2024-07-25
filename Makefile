# --------------------------------------------------------------
# This file contains the commands for the project
# --------------------------------------------------------------
# target install - for installing the project
install:
	poetry install


# target format - for formatting the project
format:
	poetry run black src


# target lint - for linting the project
lint:
	poetry run flake8 src


# target build - for building the project
build:
	poetry build


# target clean - for cleaning the project
clean:
	rm -rf src/backend/migrations
	rm -rf src/backend/db.sqlite3
	rm -rf src/backend/__pycache__
	rm -rf src/backend/venv
	rm -rf src/backend/frontend/node_modules
	rm -rf src/backend/frontend/build
	rm -rf src/backend/frontend/__pycache__
	rm -rf src/backend/frontend/venv
	rm -rf src/backend/frontend/.env
	rm -rf src/backend/frontend/.env.local
	rm -rf src/backend/frontend/.env.production.local
	rm -rf src/backend/frontend/.env.development.local
	rm -rf src/backend/frontend/.env.test.local
	rm -rf src/backend/frontend/.env.production
	rm -rf src/backend/frontend/.env.development
	rm -rf src/backend/frontend/.env.test
	rm -rf src/backend/frontend/.env.local
	rm -rf src/backend/frontend/.env
	rm -rf src/backend/frontend/yarn.lock
	rm -rf src/backend/frontend/package-lock.json
	rm -rf src/backend/frontend/.yarn
	rm -rf src/backend/frontend/.pnp
	rm -rf src/backend/frontend/.pnp.js
	rm -rf src/backend/frontend/.yarn-integrity
	rm -rf src/backend/frontend/.yarnrc.yml
	rm -rf src/backend/frontend/.yarnrc
	rm -rf src/backend/frontend/.npmrc
	rm -rf src/backend/frontend/.npmignore
	rm -rf src/backend/frontend/.npm
	rm -rf src/backend/frontend/.gitignore
	rm -rf src/backend/frontend/.git
	rm -rf src/backend/frontend/.eslintignore
	rm -rf src/backend/frontend/.eslintcache
	rm -rf src/backend/frontend/.eslintrc.js
	rm -rf src/backend/frontend/.eslintrc.cjs
	rm -rf src/backend/frontend/.eslintrc
	rm -rf src/backend/frontend/.browserslistrc
	rm -rf src/backend/frontend/.browserslistrc.js
	rm -rf src/backend/frontend/.browserslistrc.cjs
	rm -rf src/backend/frontend/.browserslistrc.json
	rm -rf src/backend/frontend/.browserslistrc.yml
	rm -rf src/backend/frontend/.browserslistrc.yaml
	rm -rf src/backend/frontend/.browserslistrc.lock
	rm -rf src/backend/frontend/.browserslistrc.lock.json
	rm -rf src/backend/frontend/.browserslistrc.lock.yml
	rm -rf src/backend/frontend/.browserslist


# target start - for starting the project
start:
	poetry run python -m src.backend.manage start


# target stop - for stopping the project
stop:
	poetry run python -m src.backend.manage stop


# target shell - for running the shell
shell:
	poetry run python -m src.backend.manage shell


# target test - for testing the project
test:
	poetry run python -m src.backend.manage test


# target run - for running the development server on 8000 port
run:
	poetry run python -m src.backend.manage runserver


# target migrations - for creating migrations
migrations: 
	poetry run python -m src.backend.manage makemigrations


# target migrate - for applying migrations
migrate: migrations
	poetry run python -m src.backend.manage migrate


# target superuser - for creating superuser
superuser:
	poetry run python -m src.backend.manage createsuperuser