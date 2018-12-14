import mysql.connector
import json

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="thedoggoeswoof",
  database="schorrdatabase"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT COLUMN_NAME FROM information_schema.columns WHERE table_schema='schorrdatabase'")

results = mycursor.fetchall()

res_list = []

for tuples in results:
	print(tuples[0])
	res_list.append(tuples[0])

res_list.pop(0)
obj = json.dumps(res_list)

print(type(obj))
print(obj)

