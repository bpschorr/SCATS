import mysql.connector
class SchorrDAO():
	
	def __init__():
		mydb = mysql.connector.connect(
  		host="localhost",
  		user="root",
  		passwd="thedoggoeswoof",
  		database="schorrdatabase")


	def get_headers(self):
		results = []
		try:
			mycursor = self.mydb.cursor()
			mycursor.execute("SELECT COLUMN_NAME FROM information_schema.columns WHERE table_schema='schorrdatabase' AND table_name='schorrtable'")
			response = mycursor.fetchall()
			for tuples in response:
				results.append(tuples[0])
		except:
			results = []
		return results


	def query_database(self, filters):
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
			mycursor = self.mydb.cursor()
			mycursor.execute(sql)
			results = mycursor.fetchall()
		except:
			results = []
		return results