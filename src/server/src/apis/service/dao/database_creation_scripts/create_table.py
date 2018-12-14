import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="thedoggoeswoof",
  database="schorrdatabase",
)

mycursor = mydb.cursor()

#mycursor.execute("DROP TABLE schorrtable")
mycursor.execute("CREATE TABLE schorrtable (schorrId INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255), state VARCHAR(255), company VARCHAR(255))")
