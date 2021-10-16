#include<bits/stdc++.h>

bool binSearch(vector<int> a,int element)
{
    int n=a.size();
    int l=0,h=n-1,m;
    while (l<=h)
    {
        m = (l+h)/2;
        if (a[m]==element)
        {
            return true;
        }
        else if(a[m]>e)
        {
            h=m-1;
        }
        else
        {
            l=m+1l
        }
        

    }
    return false;


}

void solve()
{
    int i,j,n,element;

    cin>>n;

    vector<int> a(n);
    for(i=0;i<n;i++)
    {
        cin>>a[i];
    }

    int lidx = lower_bound(a.begin(),a.end(),e)-a.begin();
    int hidx = upper_bound(a.begin(),a.end(),e)-a.begin()-1;
}

int main()
{
    int t;
    t=1;
    while(t--)
    {
        solve();
       // binSearch()
    }
}
