# Alex Oliver 2024
# Hangman as a Python CLI
# Install the randomwords library by using: pip3 install random_word

from random_word import RandomWords
print("Loading...")
word=RandomWords().get_random_word()
gword='_'*len(word)
strikes=0
wrongwords=[]

hangrom=[
   ' +--+',
   ' |  |',
   '    |',
   '    |',
   '    |',
   '    |',
  ' =====',
   ' +--+',
   ' |  |',
   ' 0  |',
   '    |',
   '    |',
   '    |',
  ' =====',
   ' +--+',
   ' |  |',
   ' 0  |',
   ' |  |',
   '    |',
   '    |',
  ' =====',
   ' +--+',
   ' |  |',
   ' 0  |',
  '/|  |',
   '    |',
   '    |',
  ' =====',
   ' +--+',
   ' |  |',
   ' 0  |',
  '/|\\ |',
   '    |',
   '    |',
  ' =====',
   ' +--+',
   ' |  |',
   ' 0  |',
  '/|\\ |',
  '/   |',
   '    |',
  ' =====',
   ' +--+',
   ' |  |',
   ' 0  |',
  '/|\\ |',
  '/ \\ |',
   '    |',
  ' ====='
]

while True:
  i=strikes*7
  while i !=(7*strikes)+7:
    if i==7*strikes:
      print(hangrom[i],"       ",gword)
    elif i==7*strikes+2:
      print(hangrom[i],"       ","Wrong characters:")
    elif i==7*strikes+3:
      print(hangrom[i],"       ",*wrongwords)
    else:
      print(hangrom[i])
    i+=1
  guess=input(">>> ")
  if guess in word or guess in wrongwords:
    for i in range(len(word)):
      if word[i]==guess:
        gword=gword[:i]+guess+gword[i+1:]
  else:
    strikes+=1
    wrongwords.extend(guess)
  if strikes==7:
    print("You lose, correct word is",word)
    break
  if gword==word:
    print("You win! You did it in",strikes,"guesses!")
    break
