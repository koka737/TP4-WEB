from flask import Flask, request

app = Flask(__name__)


@app.route('/')
def display_weather():
    try:
        station_name = request.args['station']
    except KeyError:
        station_name = "MARSEILLE"
    print(station_name)
    return "<h1>Temperature in Marseille</h1>"
