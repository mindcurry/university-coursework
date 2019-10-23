import networkx as nx
import matplotlib.pyplot as plt
G=nx.Graph()
G.add_node("Bat",pos=(1,1))
G.add_node(str(["Cat","Dog"]),pos=(0,1))
G.add_node(2,pos=(2,2))
G.add_edge("Bat",2)
pos=nx.get_node_attributes(G,'pos')
print(pos)
pos1=list(pos)
for item in pos1:
	if isinstance(item,str):
		if "[" in item:

print(pos)
nx.draw(G,pos=pos)
plt.show()