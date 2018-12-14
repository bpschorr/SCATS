#This script populates our database with test material so we have something to kickback on the APIs
#It isn't going to put all of the test_data data into the database, but it should put the same
#information into the database every time you run it.
#Also you're going to get a lot of repeat data since I needed to do that to test the filtering system

import mysql.connector

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  passwd="thedoggoeswoof",
  database="schorrdatabase"
)

mycursor = mydb.cursor()
sql = "INSERT INTO schorrtable (name, address, state, company) VALUES (%s, %s, %s, %s)"
val = []

with open('test_data', 'rb') as file:
	for line in file:
		words = line.split()
		data_base_entry = []
		for word in words:
			if(len(data_base_entry) == 4):
				val.append((data_base_entry[0], data_base_entry[1], data_base_entry[2], data_base_entry[3]))
				data_base_entry = []
				continue
			else:
				data_base_entry.append(word)

mycursor.executemany(sql, val)

mydb.commit()

print(mycursor.rowcount, "was inserted.") 

