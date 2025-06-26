# Alex Oliver 2024 & 2025
# Minesweeper, but there is a small chance that you will hit a bomb on your first go. This was a program that I made in 2024, although testing and showing this to a leader of a hackathon (which was poorly maintained and had little to no people, so I left) I realised that this was a project that was old and wasn't fully functional, so I remade it.

from random import randint

cells = ["-"]*64
mines = []
for i in range(10):
  random = randint(0, 63)
  if random not in mines:
    mines.append(random)
  else:
    i += 1

def getIndex(x, y):
  return (y*8)+x

def updateCells(x, y):
  minesAround = 0
  i = getIndex(x, y)

  if i+1 in mines:
    minesAround += 1
  if i-1 in mines:
    minesAround += 1
  if i+8 in mines:
    minesAround += 1
  if i-8 in mines:
    minesAround += 1
  if i+9 in mines:
    minesAround += 1
  if i-9 in mines:
    minesAround += 1
  if i+7 in mines:
    minesAround += 1
  if i-7 in mines:
    minesAround += 1
  
  cells[i] = minesAround

def printCells():
  print("  0 1 2 3 4 5 6 7")
  for i in range(8):
    print(i, *cells[i*8: (i+1)*8])

print(mines)

while 1:
  x, y, flag = int(input("x: ")), int(input("y: ")), input("flag/mine (f/M): ")

  if getIndex(x, y) in mines:
    if flag == "M" or flag == "" or flag == "m":
      print("Mine hit!")
      exit()
    elif flag == "f" or flag == "F":
      cells[getIndex(x, y)] = "F"

      printCells()
  else:
    updateCells(x, y)
    printCells()
  
  temp = 0
  for i in range(64):
    if cells[i] != "-":
      temp += 1
  if temp == 63:
    print("You win!")
    exit()