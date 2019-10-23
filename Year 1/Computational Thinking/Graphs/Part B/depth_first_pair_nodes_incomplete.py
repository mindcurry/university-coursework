import networkx as nx
import graph6
import graph7
import graph8
import graph9
import graph10
### count the length of the path between two pre-specified vertices a and b, using Depth-First-Search
# Right so your problem is that you just copied the code, it needs changing to fix
def dfs(G,a,b,u):
    if a==u:
        G.node[u]['label']=0
    else:
        G.node[u]['label']=G.node[a]['label']+1
    G.node[u]['visited'] = 'yes'
    print(u)
    if u==b:
        return
    sort_list = list(G.neighbors(u))
    sort_list.sort()
    for v in sort_list:
        if G.node[v]['visited'] == 'no':
            dfs(G,u,b, v)











print()
G6=graph6.Graph()
visited_counter = 0
a=12
b=40
print('Depth-First-Search visited the following nodes of G6 in this order:')
dfs(G6,a,b,a)  ### count the DFS-path from a to b, starting at a
print('Depth-First Search found a path in G6 between vertices', a, 'and', b, 'of length', G6.node[b]['label'])
print()


G7=graph7.Graph()
visited_counter = 0
a=5
b=36
print('Depth-First-Search visited the following nodes of G7 in this order:')
dfs(G7,a,b,a)  ### count the DFS-path from a to b, starting at a
print('Depth-First Search found a path in G7 between vertices', a, 'and', b, 'of length', G7.node[b]['label'])
print()


G8=graph8.Graph()
visited_counter = 0
a=15
b=40
print('Depth-First-Search visited the following nodes of G8 in this order:')
dfs(G8,a,b,a)  ### count the DFS-path from a to b, starting at a
print('Depth-First Search found a path in G8 between vertices', a, 'and', b, 'of length', G8.node[b]['label'])
print()

# This is different to other ones - others getting 17
G9=graph9.Graph()
visited_counter = 0
a=1
b=19
print('Depth-First-Search visited the following nodes of G9 in this order:')
dfs(G9,a,b,a)  ### count the DFS-path from a to b, starting at a
print('Depth-First Search found a path in G9 between vertices', a, 'and', b, 'of length', G9.node[b]['label'])
print()


G10=graph10.Graph()
visited_counter = 0
a=6
b=30
print('Depth-First-Search visited the following nodes of G10 in this order:')
dfs(G10,a,b,a)  ### count the DFS-path from a to b, starting at a
print('Depth-First Search found a path in G10 between vertices', a, 'and', b, 'of length', G10.node[b]['label'])
print()
