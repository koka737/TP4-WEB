from flask import Flask, request, Response
from urllib.parse import unquote_plus
from chat_server import gen_html, add_message, remove_message

app = Flask(__name__)
messages = []

@app.route('/', methods=['GET'])
def display_messages():
    return Response(gen_html(messages), mimetype='text/html')

@app.route('/add', methods=['POST'])
def add_messages():
    global messages
    message = unquote_plus(request.form['message'])  
    add_message(messages, message)
    return display_messages()

@app.route('/delete', methods=['POST'])
def delete_messages():
    global messages
    index = int(request.form['index'])  
    remove_message(messages, index)
    return display_messages()


