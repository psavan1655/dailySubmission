#include<bits/stdc++.h>
using namespace std;
int main()
{
    int n,m;
    cin>>n;

    //total digits of n
    int d=0;
    n=m;
    while(m!=0)
    {
        m/=10;
        d++;
    }
    int sq=n*n;

    sq=sq%100;
    //10 pow d
    int s = sq % (int)(pow(10,d));

    if(n=s)
    {
        cout<<"is Automorphic"<<endl;
    }
    else
    {
        cout<<"Not Automorohic"<<endl;
    }
    

    //if()


} // namespace std;
