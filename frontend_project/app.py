from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

# API endpoint URL (from the first project)
API_URL = "http://127.0.0.1:5000/check"

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/classify', methods=['POST'])
def classify():
    try:
        # Get the message from the form
        message = request.form.get('message', '')
        
        # Call the API project
        response = requests.post(API_URL, json={"message": message})
        
        if response.status_code == 200:
            api_response = response.json()
            return jsonify({
                'is_spam': api_response.get('is_spam', False),
                'status': True
            }), 200
        else:
            return jsonify({'status': False, 'error': 'API Error'}), 500
    except Exception as e:
        return jsonify({'status': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Running on a different port
