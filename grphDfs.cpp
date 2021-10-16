//graph
#include<bits/stdc++.h>
using namespace std;

vector<vector<int>> adj;
int n;

void recursion(int u, vector<int> &vis)
{
    vis[u]=1;
    cout<<u<<" ";
    for(auto v:adj[u])
    {
        if(!vis[v])
        {
            recursion(v,vis);
        }
    }
}

void dfs()
{
    vector<int> vis(n+1,0);
    /*for(int i=1;i<=n;i++)
    {
        if(!vis[i])
        recursion(i,vis);
    }*/
    recursion(src,vis);
}

int main()
{
    int i,e;
    cin>>n>>e;
    adj.resize(n+1);
    for(i=0;i<e;i++)
    {
        int u,v;
        cin>>u>>v;
        adj[u].push_back(v);
        adj[v].push_back(u);
    }
    dfs(); //1
}
