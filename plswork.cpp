#include <iostream>
#include <fstream>
#include <sstream>
#include <Windows.h>

#define MAX_LINES 110
#define POSITIONS [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1], [2, 1], [3, 1], [0, 2], [1, 2], [2, 2], [3, 2]]

using namespace std;

void simulateStart() {
    // left click
    mouse_event(MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0);
	mouse_event(MOUSEEVENTF_LEFTUP, 0, 0, 0, 0);

    // ctrl+a
    keybd_event(VK_CONTROL, 0, 0, 0);
    keybd_event(0x41, 0, 0, 0);
    keybd_event(0x41, 0, KEYEVENTF_KEYUP, 0);
    keybd_event(VK_CONTROL, 0, KEYEVENTF_KEYUP, 0);
    // ctrl+c
    keybd_event(VK_CONTROL, 0, 0, 0);
    keybd_event(0x43, 0, 0, 0);
    keybd_event(0x43, 0, KEYEVENTF_KEYUP, 0);
    keybd_event(VK_CONTROL, 0, KEYEVENTF_KEYUP, 0);
}

int index(string array[], string element, int size) {
    for (int m = 0; m < size; m ++) {
        if (array[m] == element) {
            return m;
        }
    }
    return -1;
}


int main() {
    ifstream file;
    file.open("C:/Users/emmet/Desktop/Programming/Python/general.txt");
    string dict[MAX_LINES];

    int i = 0;
    while (!file.eof()) {
        getline(file, dict[i]);
        i ++;

        if (i == MAX_LINES) {
            break;
        }
    }

    file.close();

    /* debugging dictionary
    for (int i = 0; i < MAX_LINES; i ++) {
        cout << dict[i] << endl;
    }
    */

    simulateStart();

    HANDLE clip;
    if (OpenClipboard(NULL)) {
        clip = GetClipboardData(CF_TEXT);
    }
    
    string game[MAX_LINES];
    istringstream ssin((char*) clip);

    i = 0;
    while (i < MAX_LINES && getline(ssin, game[i])) {
        i++;
    }

    /* debugging the game capture
    for (i = 7; i < 19; i ++) {
        cout << game[i] << endl;
    }
    */

    i = 7;
    cout << game[i] << endl;
    cout << index(dict, game[i], MAX_LINES) << endl;

    return 0;
}