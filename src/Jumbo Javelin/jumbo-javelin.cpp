#include <iostream>
using namespace std;

int main(){
    int n;
    cin >> n;
    int sum=0, a=0;
    while (cin >> a)
    {
        sum += a;
    }
    cout << sum-(n-1);
}