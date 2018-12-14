from flask import Flask, request
from sys import path
from os import getcwd
path.append(getcwd() + "/service")
import SchorrService
import json

app = Flask(__name__)

#This just allows other servers to hit our APIs
@app.after_request
def add_header(response):
	response.headers['Access-Control-Allow-Origin'] = '*'
	return response

#Takes the a query consisting of a JSON object with the table key and a value and query's the database on it.
#On success, it will return a list of JSON objects.
#On failure, it will reutrn an empty list
@app.route('/query', methods=['POST'])
def query_data():
	dictionary = json.loads(request.get_json(force=True))
	response = []
	try:
		response = SchorrService().query_database(dictionary)
	except:
		response = []
	
	return response

#Takes a JSON containing a tableName and returns all the headers for that table
#Returns The Headers in JSON format if successful
#Returns an empty JSON if unsuccessful
@app.route('/get_headers')
def get_headers():
	response = ''
	try:
		response = SchorrService().get_headers()
	except:
		response = '{}'
	
	return response
























