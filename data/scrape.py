import requests
import os
from bs4 import BeautifulSoup

with open("data/isbns.txt", "r") as f:
    isbns = f.read()
    isbns = isbns.split("\n")

def scrape():
    url = "https://www.bookfinder.com/search/?mode=isbn&st=sr&ac=qr&isbn="
    num = 0
    for isbn in isbns:
        headers = {'Accept': 'application/json'}
        r = requests.get(url + isbn)
        if (r.status_code != 200):
            print("ERROR")
            print(isbn)
        else:
            num += 1
            print(f"SUCCESS {num}")
            with open(f"scraper/html/{isbn}.html", "w") as f:
                f.write(r.text)


# do they all have the number of pages?
filenames = os.listdir("data/html")

num = 0
for filename in filenames:
    with open(filename, "r") as f:
        




    
