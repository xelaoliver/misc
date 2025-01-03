// a random number guesser and generator from integers between 0-100, using the iostream and cstdlib librarys.

#include <iostream>
#include <cstdlib>
using namespace std;

int main() {
    int input;
    int random = rand()%101;
    while (true) {
        cout << "Enter an integer between 0-100 ";
        cin >> input;
        
        if (input == random) {
            cout << input << " is the correct integer";
            break;
        } else if (input < random) {
            cout << input << " is too small \n";
        } else {
            cout << input << " is too great \n";
        };
    }
}
