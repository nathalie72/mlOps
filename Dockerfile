FROM python:3.9

WORKDIR /app

COPY requirements.txt /app/

RUN apt update

RUN apt install python3-flask -y

COPY static /app/static
COPY templates /app/templates

COPY app.py /app/app.py 

EXPOSE 5000

# CMD ["tail", "-f", "/dev/null"]
CMD ["flask", "run", "--host=0.0.0.0"]
