# paste the vocab for the quizlet set into 'general.txt', place your mouse where there is a space on the 'Start game' button and run the program (ctrl+alt+n if using vscode). this program works best with a 1920x1080 display, but you can alter the distances between boxes and the starting position if needed.

import pyperclip
import pyautogui
import math

with open("Python\general.txt", encoding="utf-8") as file:
    lines = [line.rstrip() for line in file]

reference = []
for line in lines:
    if line:
        reference.append(line)

print(reference)

positions = [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2]]

pyautogui.click()
pyautogui.hotkey("ctrlleft", "a")
pyautogui.hotkey("ctrlleft", "c")

s = pyperclip.paste()
game = s.split("\r\n")
game = game[7:len(game)-1]

instructions = []
for i, item in enumerate(game):
    j = reference.index(item)
    if j % 2 == 0:
        end = j+1
    else:
        end = j-1

    append = not any(game.index(reference[end]) in jtem for jtem in instructions)
    
    if append:
        instructions.append([game.index(reference[reference.index(game[i])]), game.index(reference[end])])

pyautogui.moveTo(390, 310, duration = 0)
for i in range(len(instructions)):
    x, y = positions[instructions[i][0]][0], positions[instructions[i][0]][1]
    pyautogui.moveTo(390+(x*370), 310+(y*280), duration = 0)

    pyautogui.click()
    x, y = positions[instructions[i][1]][0], positions[instructions[i][1]][1]
    pyautogui.moveTo(390+(x*370), 310+(y*280), duration = 0)
    pyautogui.click()
