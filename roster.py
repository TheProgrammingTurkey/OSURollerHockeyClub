import csv

rows = []

with open("roster.csv", newline="", encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        rows.append(row)
rows = rows[1:]  # Remove the header row
rows = [[cell.strip() for cell in row] for row in rows]
print(rows)
