//https://open.kattis.com/problems/leftbeehind

#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int a = 0, b = 0;

int main(){
    while (cin >> a >> b)
    {
        if(a == 0 && b == 0){
            break;
        }
        if(a + b == 13){
            cout << "Never speak again." << endl;
        }else if(a == b){
            cout << "Undecided." << endl;
        }else if(a < b){
            cout << "Left beehind." << endl;
        }else if(a > b){
            cout << "To the convention." << endl;
        }
    }
    return 0;
}