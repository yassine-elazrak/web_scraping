import sqlite3
import pickle

protocol = 0
sqlite3.register_converter("pickle", pickle.loads)
sqlite3.register_adapter(list, pickle.dumps)
sqlite3.register_adapter(set, pickle.dumps)



table_name    = "articles"
insert_string = "INSERT into %s values (?, ?, ?)" % (table_name)
update_string = "UPDATE %s SET lines=?, parents=? WHERE id=?" % (table_name)
select_string = "SELECT id, lines, parents FROM %s WHERE id=?" % (table_name)

def create_schema(cursor):
    try:
        cursor.execute("""
            CREATE TABLE %s (
                id    integer primary key not null,
                lines pickle,
                parents pickle
                )""" % (table_name))
    except sqlite3.OperationalError:
        pass

def insert_into_db(cursor, obj):
    try:
        cursor.execute(
            insert_string,
            obj
        )
    except sqlite3.IntegrityError:
        print("Duplicate key")
    conn.commit()


def update_in_db(cursor, obj):
    cursor.execute(update_string,
        obj
    )

def get_obj_from_db(cursor, key):
    cursor.execute(select_string, (key))
    data = cursor.fetchone()
    return data


conn = sqlite3.connect('example.db', detect_types=sqlite3.PARSE_DECLTYPES)
c = conn.cursor()

create_schema(c)

print("created schema")

key = 1

some_object = (key, [1,2,3], set([1,2,3]))

print("created object")

insert_into_db(c, some_object)

print( get_obj_from_db(c, (key,)))

update_in_db(c, (key, [1,2,4], set([1,2,3])) )

print( get_obj_from_db(c, (key,)) )

print("saved object")

##CREATE table if not exists Tweets (id integer PRIMARY key AUTOINCREMENT, tweet text , creat_date  date)
class  Database:
    def __init__(self):
        self.db_name = 'db_auto'
        self.conn = sqlite3.connect(self.db_name)
        self.cur = self.conn.cursor()
        self.cur.execute(
            "CREATE TABLE IF NOT EXISTS product (id INTEGER PRIMARY KEY, name text)")
        self.conn.commit()

        if not self.all():
            self.arr = ["Royal Air Maroc" , "@RAM_Maroc",    "@RAM_Maroc", \
  "royalairmaroc", "الخطوط المغربيه" , "#الخطوط_الملكية_المغربية "\
 , "الخطوط الملكية المغربية"    , "لارام",  " لارام"\
,"الخطوط_الملكية_المغربية" ]
            for ward in self.arr:
                self.insert( ward)


    def run_query(self , query , parameters=()):
        with sqlite3.connect(self.db_name) as conn:
            cursor = conn.cursor()
            result = cursor.execute(query, parameters)
            conn.commit()
        return result

#Create TABLE IF NOT EXISTS Tweets (id INteger primary KEY, tweet text , date_creat date)
#insert into Tweets (tweet,date_creat) values('hello','2020-2-2')

    def insert(self , word):
        # if self.run_query("SELECT * FROM product WHERE name LIKE ?", ('%'+word+'%',)):
        query = 'INSERT INTO product VALUES(NULL, ?)'
        parameters =  (word,)
        self.run_query(query, parameters)
        print('')

    def delete(self , word):
        query = 'DELETE FROM product WHERE name = ?'
        self.run_query(query, (word, ))
    
    def all(self):
        query = 'SELECT * FROM product ORDER BY name DESC'
        db_rows =list(self.run_query(query))
        if db_rows:
            return( list(set(np.array(db_rows)[:,1])))
        return []
        # for row in db_rows:
        #     print(row[1])
        # print( )
    # def __del__(self):
    #     self.conn.close()