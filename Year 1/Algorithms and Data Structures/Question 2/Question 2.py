def count_ephemeral(n1,n2,k):
    # Create a list of the powers required for the given value of k
    power_list=[x**k for x in range (10)]
    # Count keeps track of the number of ephemeral numbers
    count=0
    # Create two tables, one to store the eternal numbers, and one to store the ephemeral numbers
    eternal=set()
    eph=set()
    for n in range (n1,n2):
        # Current sequence stores all the values in the current sequence
        current_seq=set()
        # This checks if n has been seen before or if it is 1, in any of those cases it will break out of the loop
        while n not in current_seq and n not in eternal and n not in eph and n!=1:
            # Add the new number to the current sequence
            current_seq.add(n)
            # Calculate the k child of n
            k_child=0
            while n:
                digit = n % 10
                k_child+=power_list[digit]
                n //=10
            n=k_child
        # If n is an ephemeral number add it, and the rest of the sequence to the list of ephemeral numbers
        if n==1 or n in eph:
            eph.update(current_seq)
            count+=1
        # Otherwise add the sequence to the list of eternal numbers
        else:
            eternal.update(current_seq)
    return count

print(count_ephemeral(1,10000000,4))