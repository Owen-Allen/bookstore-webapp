import pandas as pd

# ISBN,Title,Author,Publisher Group,Volume,Value,RRP,ASP,Binding,Publ Date,Product Class
df = pd.read_csv('data/csv/top100.csv')

print(df)

# Index,Position,ISBN,Title,Author,Imprint,Publisher Group,Volume,Value,RRP,ASP,Binding,Publ Date,Product Class

# make functions will create a text file, useful for inserting into DB
def make_book():
    # isbn title genre price stock num_pages pub_cut
    # we will make up a stock and pub_cut
    return

def make_author():
    # author_id name
    return

def make_publisher():
    # author_id name
    return

def make_wrote():
    # isbn author_id
    return

def make_published():
    # isbn publisher_id
    return
