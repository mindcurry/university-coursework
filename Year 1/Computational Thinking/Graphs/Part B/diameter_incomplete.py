import networkx as nx
import graph6
import graph7
import graph8
import graph9
import graph10


def max_distance(G):
    max=0
    nodes=list(G.nodes())
    pairs=[[i,j] for i in nodes for j in nodes]
    for i in pairs:
        distance=bfs(G,i[0],i[1])
        if distance>max:
            max=distance
    return max


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























print()
G6=graph6.Graph()
print('The diameter of G6 (i.e. the maximum distance between two vertices) is:', max_distance(G6))
print()


G7=graph7.Graph()
print('The diameter of G7 (i.e. the maximum distance between two vertices) is:', max_distance(G7))
print()


G8=graph8.Graph()
print('The diameter of G8 (i.e. the maximum distance between two vertices) is:', max_distance(G8))
print()


G9=graph9.Graph()
print('The diameter of G9 (i.e. the maximum distance between two vertices) is:', max_distance(G9))
print()


G10=graph10.Graph()
print('The diameter of G10 (i.e. the maximum distance between two vertices) is:', max_distance(G10))
print()
