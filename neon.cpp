#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,sum = 0, sq,m,rem;
    cin>>n;
    sq=n*n;
    
    while(sq!=0)
    {
        rem = sq%10;
        sum = sum + rem;
        sq/=10;
    }
    if(n==sum)
        cout<<"Neon"<<endl;
    else
        cout<<"Not Neon"<<endl;
    
} // namespace stdint main()

