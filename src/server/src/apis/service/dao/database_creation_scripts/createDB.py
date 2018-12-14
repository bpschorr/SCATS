import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="thedoggoeswoof",
)

mycursor = mydb.cursor()

#mycursor.execute("DROP DATABASE schorrdatabase")
mycursor.execute("CREATE DATABASE schorrdatabase")
