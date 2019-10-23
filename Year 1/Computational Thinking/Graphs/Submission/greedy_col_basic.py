import networkx as nx
import graph1
import graph2
import graph3
import graph4
import graph5
kmax=0


def find_smallest_color(G,i):
    n = len(G.nodes())
    keys = G.adj[i]
    list = []
    for key in keys:
        list.append(G.nodes[key]['color'])
    color = 1
    while color in list:
        color += 1
    return color


def greedy(G):
    global kmax
    for i in sorted(G.nodes()):
        G.nodes[i]['color'] = find_smallest_color(G, i)
    kmax = max(G.nodes[i]['color'] for i in G.nodes)









    print()
    for i in G.nodes():
        print('vertex', i, ': color', G.node[i]['color'])
    print()
    print('The number of colors that Greedy computed is:', kmax)


print('Graph G1:')
G=graph1.Graph()
greedy(G)


print('Graph G2:')
G=graph2.Graph()
greedy(G)


print('Graph G3:')
G=graph3.Graph()
greedy(G)


print('Graph G4:')
G=graph4.Graph()
greedy(G)


print('Graph G5:')
G=graph5.Graph()
greedy(G)