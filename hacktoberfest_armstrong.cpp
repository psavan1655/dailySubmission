#include<bits/stdc++.h>
using namespace std;
int main()
{
    int sum=0,n,rem;
    cin>>n;
    int m=n;
    while(m!=0)
    {
        rem = m%10;
        sum = sum + (rem*rem*rem);
        m = m/10;
    }
    if(n==sum)
    {
        cout<<"number is armstrong"<<endl;
    }
    else
    {
        cout<<"Not Armstrong"<<endl;
    }
    
}
