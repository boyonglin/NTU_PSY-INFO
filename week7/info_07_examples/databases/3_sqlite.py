import sqlite3 #pip install pysqlite3
c= sqlite3.connect('2_papers.sqlite')

# create a cousor object for select query:
cursor = c.execute("SELECT * from refs")
 
# display all data from the refs table:
for row in cursor:
    print(row[0])
