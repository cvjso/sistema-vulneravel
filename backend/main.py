from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import bcrypt
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

salt = bcrypt.gensalt()
ROT = 13


def encrypt(text, s):
    result = ""
    for i in range(len(text)):
        char = text[i]
        if (char.isupper()):
            result += chr((ord(char) + s - 65) % 26 + 65)
        else:
            result += chr((ord(char) + s - 97) % 26 + 97)
    return result


@app.route('/register', methods=["POST"])
@cross_origin()
def register():
    req = request.get_json()
    with open("db.json", "r+") as file:
        j_file = json.load(file)
        j_file[req["email"]] = encrypt(req["password"], ROT)
        file.seek(0)
        file.write(json.dumps(j_file))
    return "Added"


@app.route('/login', methods=["POST"])
@cross_origin()
def login():
    req = request.get_json()
    with open("db.json", "r+") as file:
        j_file = json.load(file)
        return encrypt(j_file[req["email"]], ROT)


if __name__ == '__main__':
    app.run(debug=True)
