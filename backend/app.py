from flask import Flask
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/")
def home():
    return {
        "message": "Hello from ECS Backend"
    }

@app.route("/api")
def api():
    return {
        "message": "Hello from ECS Backend"
    }

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)