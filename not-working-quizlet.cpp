#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <string>
#include <windows.h>
#include <algorithm>

using namespace std;

std::string trim(const std::string& str) {
    size_t start = str.find_first_not_of(" \t\r\n");
    size_t end = str.find_last_not_of(" \t\r\n");
    return (start == std::string::npos || end == std::string::npos)?"" : str.substr(start, end-start+1);
}

int indexOf(const std::vector<string>& array, const string& item) {
    string trimmedItem = trim(item);
    for (size_t i = 0; i < array.size(); i ++) {
        if (trim(array[i]) == trimmedItem) {
            return i;
        }
    }
    return -1;
}


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

int main() {
    // open dictionary file
    ifstream file;
    file.open("C:/Users/emmet/Desktop/Programming/Python/general.txt");
    std::vector<string> reference;
    std::string line;
    std::vector<std::pair<int, int>> instructions;

    while (getline(file, line)) {
        line = trim(line);
        if (!line.empty()) {
            reference.push_back(line);
        }
    }

    // get game information
    simulateStart();

    HANDLE clip;
    std::vector<string> game;
    if (OpenClipboard(NULL)) {
        clip = GetClipboardData(CF_TEXT);
        if (clip != NULL) {
            char* clipText = static_cast<char*>(GlobalLock(clip));
            if (clipText != NULL) {
                istringstream ssin(clipText);
                string item;
                while (getline(ssin, item, '\n')) {
                    game.push_back(trim(item));
                }
                GlobalUnlock(clip);
            }
        }
        CloseClipboard();
    }

    // generate instructions
    int j;
    for (int i = 7; i < game.size(); i ++) {
        j = indexOf(reference, game[i]);

        /*
        if (j%2 == 0) {
            j = j-1;
        } else {
            j = j+1;
        }
    
        bool append = true;
        for (int l = 0; l < instructions.size(); l ++) {
            int section[2] = {indexOf(game, reference[indexOf(reference, game[i])]), indexOf(game, reference[j])};
            if (instructions[l].first == indexOf(game, reference[indexOf(reference, game[i])]) && instructions[l].second == indexOf(game, reference[j]) || instructions[l].first == indexOf(game, reference[j]) && instructions[l].second == indexOf(game, reference[indexOf(reference, game[i])])) {
                append = false;
                break;
            }
        }

        if (append) {
            instructions.push_back({indexOf(game, reference[indexOf(reference, game[i])]), indexOf(game, reference[j])});
        }
        */

        cout << i << ": " << reference[indexOf(reference, game[i])] << " and " << indexOf(game, reference[j+1]) << endl;
    }

    for (int i = 0; i < instructions.size(); i ++) {
        cout << i << ": " << reference[instructions[i].first] << " and " << reference[instructions[i].second] << endl;
    }
}

/* find in array function example
int main() {
    string names[4] = {"John", "Edward", "Paul", "Chad"};
    string myName = "Paul";

    cout << "My mame: " << myName << endl << "Index: " << indexOf(names, myName, sizeof(names)/sizeof(names[0])) << endl;
}
*/

/* open file and find the index of le poisson example
int main() {
    ifstream file;
    file.open("C:/Users/emmet/Desktop/Programming/Python/general.txt");
    std::vector<string> reference;
    std::string line;

    while (getline(file, line)) {
        if (line != "") {
            reference.push_back(line);
        }
    }

    for (size_t i = 0; i < reference.size(); i ++) {
        cout << i << ":" << reference[i] << endl;
    }

    cout << "item: le poisson\nindex: " << indexOf(reference, "le poisson") << endl;

    return 0;
}
*/

/* get clipboard example
int main() {
    HANDLE clip;
    std::vector<string> game;
    if (OpenClipboard(NULL)) {
        clip = GetClipboardData(CF_TEXT);
        if (clip != NULL) {
            char* clipText = static_cast<char*>(GlobalLock(clip));
            if (clipText != NULL) {
                istringstream ssin(clipText);
                string item;
                while (getline(ssin, item, '\n')) {
                    game.push_back(item);
                }
                GlobalUnlock(clip);
            }
        }
        CloseClipboard();
    }

    for (const auto& item : game) {
        cout << item << endl;
    }
}
*/
