#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int main(){
    string str1 = "";
    char a;
    while (cin >> a)
    {
        if(a != '<'){
            str1.push_back(a);
        }else{
            str1.pop_back();
        }
    }
    cout << str1 << endl;
    return 0;
}