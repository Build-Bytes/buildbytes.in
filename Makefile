# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# React + Vite
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
dev:
	cd src/frontend && npm run dev

build:
	cd src/frontend && npm run build

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Django
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
test:
	poetry run python -m src.backend.manage test

showmig:
	poetry run python -m src.backend.manage showmigrations

migrations:
	poetry run python -m src.backend.manage makemigrations

migrate:
	poetry run python -m src.backend.manage migrate

run:
	poetry run python -m src.backend.manage runserver 127.0.0.1:80

shell:
	poetry run python -m src.backend.manage shell

collectstatic:
	poetry run python -m src.backend.manage collectstatic

findstatic:
	poetry run python -m src.backend.manage findstatic

addsu:
	poetry run python -m src.backend.manage createsuperuser

passwd:
	poetry run python -m src.backend.manage changepassword

grun: collectstatic
	poetry run gunicorn -b 127.0.0.1:80 src.backend.wsgi:application

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
# Git
# ~~~~~~~~~~~~~~~~~~~~~~~~~~~
add:
	git add .

commit:
	@echo "Enter commit title: " \
	&& read title \
	&& echo "Enter commit message: " \
	&& read message \
	&& git commit -m $$title -m $$message
	if ($$? -ne 0); then \
		clear; \
		echo "Commit failed"; \
	else \
		clear \
		echo "Commit successful"; \
	fi

log:
	git log --oneline