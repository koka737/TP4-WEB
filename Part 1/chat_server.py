def gen_html(messages):
    html = "<html><head><title>Minimalist Chat</title></head><body>"
    html += "<h1>Minimalist Chat Server</h1><ul>"
    
    for i, message in enumerate(messages):
        html += f"<li>{i}: {message}</li>"
    
    html += "</ul>"

    html += '''
    <form method="POST" action="/add">
        <input type="text" name="message" placeholder="Enter message" required>
        <input type="submit" value="Send">
    </form>
    '''

    html += '''
    <form method="POST" action="/delete">
        <input type="number" name="index" placeholder="Index to delete" required>
        <input type="submit" value="Delete">
    </form>
    '''
    
    html += "</body></html>"
    return html

def add_message(messages, text):
    messages.append(text)

def remove_message(messages, index):
    if 0 <= index < len(messages):
        del messages[index]

