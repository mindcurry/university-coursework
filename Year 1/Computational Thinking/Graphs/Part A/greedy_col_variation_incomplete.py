import networkx as nx
import graph1
import graph2
import graph3
import graph4
import graph5
kmax=0

def find_next_vertex(G):
    visited = nx.get_node_attributes(G, 'visited')
    visited=[k for k, v in visited.items() if v=="yes"]
    adjacent=set()
    for item in visited:
        adjacent=adjacent|(set(G.neighbors(item)))
    visited=set()
    for item in adjacent:
        if G.nodes[item]['visited']=='yes':
            visited.add(item)
    adjacent-=visited
    return min(adjacent)



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
    n = len(G.nodes())
    global kmax
    global visited_counter
    G.nodes[1]['color']=1
    G.nodes[1]['visited']='yes'
    for i in range(1,len(G)):
        next_vertex=find_next_vertex(G)
        G.nodes[next_vertex]['color']=find_smallest_color(G,next_vertex)
        G.nodes[next_vertex]['visited'] = 'yes'
    visited = nx.get_node_attributes(G, 'color')
    kmax=(max([v for k, v in visited.items()]))














    print()
    for i in G.nodes():
        print('vertex', i, ': color', G.node[i]['color'])
    print()
    print('The number of colors that Greedy computed is:', kmax)
    print()


# Yo, the first one gives a different result
print('Graph G1:')
G=graph1.Graph()
G.add_nodes_from(G.nodes(), visited = 'no')
greedy(G)

print('Graph G2:')
G=graph2.Graph()
G.add_nodes_from(G.nodes(), visited = 'no')
greedy(G)


print('Graph G3:')
G=graph3.Graph()
G.add_nodes_from(G.nodes(), visited = 'no')
greedy(G)


print('Graph G4:')
G=graph4.Graph()
G.add_nodes_from(G.nodes(), visited = 'no')
greedy(G)


print('Graph G5:')
G=graph5.Graph()
G.add_nodes_from(G.nodes(), visited = 'no')
greedy(G)