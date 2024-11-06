#include <LiquidCrystal.h>

const int rs = 12, en = 11, d4 = 5, d5 = 4, d6 = 3, d7 = 2;
LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

byte face1[] = {
  B00000,
  B00000,
  B00000,
  B00000,
  B01000,
  B01000,
  B00000,
  B00000
};

byte face2[] = {
  B00000,
  B00000,
  B00000,
  B00000,
  B10010,
  B10010,
  B10000,
  B10000
};

byte face3[] = {
  B00001,
  B00000,
  B00100,
  B00011,
  B00000,
  B00000,
  B00000,
  B00000
};

byte face4[] = {
  B10000,
  B00000,
  B00100,
  B11000,
  B00000,
  B00000,
  B00000,
  B00000
};

void setup() {
  lcd.begin(16, 2);
  
  lcd.createChar(0, face1);
  lcd.createChar(1, face2);
  lcd.createChar(2, face3);
  lcd.createChar(3, face4);
  
  lcd.setCursor(7, 0);
  lcd.write((byte)0);
  lcd.setCursor(8, 0);
  lcd.write((byte)1);
  lcd.setCursor(7, 1);
  lcd.write((byte)2);
  lcd.setCursor(8, 1);
  lcd.write((byte)3);
}

void loop() {}
