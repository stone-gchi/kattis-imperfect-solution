// https://open.kattis.com/problems/speeding

#include <iostream>
#include <algorithm>
#include <string>
using namespace std;

int main(){
    int n;
    cin >> n;
    int a, b;
    int prevA = 0, prevB = 0, result = 0, curr = 0;

    while (cin >> a >> b)
    {
        curr = (b-prevB)/(double)(a-prevA);
        if(curr > result){
            result = curr;
        }
        prevB = b;
        prevA = a;
    }
    cout << result;
    return 0;
}