import os
# num_pages
filenames = os.listdir("data/html")
search_string = "number of pages: "
success = 0
for filename in filenames:
    isbn = filename.split(".")[0]
    with open("data/html/" + filename, "r") as f:
        lines = f.read()
        if search_string in lines:
            num = lines.split(search_string)[1][1:4]
            if(num.isnumeric()):
                
print(f"success {success}")


