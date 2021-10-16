#include<bits/stdc++.h>
using namespace std;

int main()
{
    int i,n,h,x;
    cin>>n;
    cin>>h;
    cin>>x;
    string s1;
    vector<int> t(n);
    for(i=0;i<n;i++)
    {
        cin>>t[i];
    }
    for(i=0;i<n;i++)
    {
        if((t[i]+x)>=h)
        {
            s1="YES";
            break;
        }
        else
        {
            s1="NO";
        }
    }
    cout<<s1<<endl;
    return 0;
}
