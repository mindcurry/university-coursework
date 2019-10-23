# The function for selection sort
def SelectionSort(list):
    for i in range (0,len(list)):
        elem=list[i]
        pos=i
        for j in range(i+1,len(list)):
            if list[j]>=elem:
                elem=list[j]
                pos=j
        list[i], list[pos] = list[pos], list[i]
    return list

def HybridSort(nlist):
<<<<<<< HEAD
=======
    # If the length of the list is less than or equal to 4, then sort using selection sort
>>>>>>> master
    if len(nlist)<=4:
        nlist=SelectionSort(nlist)
    # Otherwise sort using merge sort, unless the list is of length 1
    if len(nlist)>1 and len(nlist)>4:
        # Find the middle of the list
        mid = len(nlist)//2
        # Use this to create two lists
        lefthalf = nlist[:mid]
        righthalf = nlist[mid:]
<<<<<<< HEAD

        HybridSort(lefthalf)
        HybridSort(righthalf)

=======
        # Recursively sort each half
        MergeSort(lefthalf)
        MergeSort(righthalf)
        # Merging
>>>>>>> master
        i=j=k=0
        # While the lists are not exhausted
        while i < len(lefthalf) and j < len(righthalf):
            # If the left half first index is greater than right half, add it to the output list
            if lefthalf[i] >= righthalf[j]:
                nlist[k]=lefthalf[i]
                # Increment the value of i so that the element would not be added multiple times
                i=i+1
            else:
                # Other wise the right half first index is larger, so add that
                nlist[k]=righthalf[j]
                # And again increment the index
                j=j+1
            # Increment k to jump to the next index in nlist
            k=k+1
        # If the loop has broken out to here then one of the lists is empty
        # Loop adding all the remaining elements of the lefthalf list, if it is empty then just move on
        while i < len(lefthalf):
            nlist[k]=lefthalf[i]
            i=i+1
            k=k+1
        # Loop adding all the remaining elements of the righthalf list, again, if it is empty then just move on
        while j < len(righthalf):
            nlist[k]=righthalf[j]
            j=j+1
            k=k+1
<<<<<<< HEAD


nlist = [7,3,5,9,1]
HybridSort(nlist)
=======

>>>>>>> master













