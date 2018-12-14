import mysql.connector
import json

def get_headers():
	mydb = mysql.connector.connect(
  	host="localhost",
  	user="root",
  	passwd="thedoggoeswoof",
  	database="schorrdatabase"
	)
	mycursor = mydb.cursor()

	results = []
	try:
		mycursor.execute("SELECT COLUMN_NAME FROM information_schema.columns WHERE table_schema='schorrdatabase' AND table_name='schorrtable'")
		response = mycursor.fetchall()
		for tuples in response:
			results.append(tuples[0])
	except:
		results = []
	return results

def query_database(filters):
	mydb = mysql.connector.connect(
  	host="localhost",
  	user="root",
  	passwd="thedoggoeswoof",
  	database="schorrdatabase"
	)
	mycursor = mydb.cursor()

	results = []
	try:
		sql = "SELECT * FROM schorrtable"
		if filters:
			where_clause = " WHERE "
			for i in range(0, len(filters)):
				where_clause = where_clause + filters[i]['field'] + "='" + filters[i]['value'] + "'"
				if i != len(filters)-1:
					where_clause = where_clause + " AND "
			sql = sql + where_clause
		mycursor.execute(sql)
		results = mycursor.fetchall()
	except:
		results = []
	return results

def query_service():
	response = '[]'
	try:
		JSON = '[{"field": "name", "value": "lorem"}]'
		filters = json.loads(JSON)
		result = query_database(filters)
		head_list = get_headers()
		res_list = []
		page_size = 10
		if len(result) <= page_size:
			for tuples in result:
				dictionary = {}
				dictionary[head_list[1]] = tuples[1]
				dictionary[head_list[2]] = tuples[2]
				dictionary[head_list[3]] = tuples[3]
				dictionary[head_list[4]] = tuples[4]
				res_list.append(dictionary)
		else:
			for i in range(0, page_size):
				tuples = result[i]
				dictionary = {}
				dictionary[head_list[1][0]] = tuples[1]
				dictionary[head_list[2]] = tuples[2]
				dictionary[head_list[3]] = tuples[3]
				dictionary[head_list[4]] = tuples[4]
				res_list.append(dictionary)

		response = json.dumps(res_list)

	except:
		response = '[]'
	return response

#mydb = mysql.connector.connect(
#  host="localhost",
#  user="root",
#  passwd="thedoggoeswoof",
#  database="schorrdatabase"
#)

#mycursor = mydb.cursor()

#mycursor.execute("SELECT * FROM schorrtable WHERE name='Lorem'")

#results = mycursor.fetchall()

#res_list = []

#response = get_headers()
#head_list = []
#for tuples in response:
#	print(tuples)
#	head_list.append(tuples[0])

#for tuples in results:
#	dictionary = {}
#	dictionary[head_list[1]] = tuples[1]
#	dictionary[head_list[2]] = tuples[2]
#	dictionary[head_list[3]] = tuples[3]
#	dictionary[head_list[4]] = tuples[4]
#	res_list.append(dictionary)

#obj = json.dumps(res_list)
#print(type(obj))
#print(obj)
#[{"field": "name", "value": "lorem"}]

print(query_service())


