import networkx as nx
import graph6
import graph7
import graph8
import graph9
import graph10

def bfs(G,a,b):
    G.add_nodes_from(G.nodes(), label = -1) # initialization of all labels
    G.node[a]['label'] = 0
    i=0
    while G.node[b]['label']==-1:
        vertex_list=[node for node in G.nodes() if G.node[node]['label']==i]
        for u in vertex_list:
            adjacent=list(G.adj[u])
            for v in adjacent:
                G.node[v]['label']=i+1
        i+=1
    return G.node[b]['label']












G6=graph6.Graph()
a=12
b=40
print('Graph G6:')
print('The distance between vertices', a, 'and', b, 'is:', bfs(G6,a,b))
print(len(nx.shortest_path(G6,source=12,target=40))-1)
print()


G7=graph7.Graph()
a=5
b=36
print('Graph G7:')
print('The distance between vertices', a, 'and', b, 'is:', bfs(G7,a,b))
print(len(nx.shortest_path(G7,source=5,target=36))-1)
print()


G8=graph8.Graph()
a=15
b=35
print('Graph G8:')
print('The distance between vertices', a, 'and', b, 'is:', bfs(G8,a,b))
print(len(nx.shortest_path(G8,source=15,target=35))-1)
print()


G9=graph9.Graph()
a=1
b=19
print('Graph G9:')
print('The distance between vertices', a, 'and', b, 'is:', bfs(G9,a,b))
print(len(nx.shortest_path(G9,source=1,target=19))-1)
print()


G10=graph10.Graph()
a=6
b=30
print('Graph G10:')
print('The distance between vertices', a, 'and', b, 'is:', bfs(G10,a,b))
print(len(nx.shortest_path(G10,source=6,target=30))-1)
print()
