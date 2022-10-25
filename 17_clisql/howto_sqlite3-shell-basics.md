how-to :: sqlite3 shell basics

--

## Overview: SQL stands for Structured Query Language. 

SQL is a language for storing and retrieving data stored in a database. 

The standard language for RDMS (Relational Database Management System), of which include MySQL, MS Access, 
Oracle, Sybase, Informix, Postgres, and SQL Server.


### Start-up

Type sqlite3 into terminal
This should appear:
'''
SQLite version 3.37.2 2022-01-06 13:25:41
Enter ".help" for usage hints.
Connected to a transient in-memory database.
Use ".open FILENAME" to reopen on a persistent database.
sqlite>
'''

### Kool methods

Create table method
'''
sqlite> create table tbl1(one text, two int);
'''
Insert method
'''
sqlite> insert into tbl1 values('hello!',10);
'''
Select * from method
'''
sqlite> select * from tbl1;
'''



Open method:

'''
Use ".open FILENAME" to reopen on a persistent database.
sqlite> .open ex1.db
sqlite>
'''


