import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="thedoggoeswoof",
  database="schorrdatabase"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT * FROM schorrtable")

for x in mycursor:
  print(x)