---
sidebar_label: 'Caching and Caches'
displayed_sidebar: docsidebar

---


When desiging a system , memeory is a very big consideration, becasue this is where everything is stored and processed. 


At the top level of the memory hierarchy are the CPU’s general-purpose registers.
CPU registers in this portion of the memory hierarchy, it does not change the fact that CPUs have a very limited number of registers, and the cost per byte of register memory is quite high.


The memory hierarchy enables us to take advantage of the principles of spatial locality of reference and temporality of reference to move frequently referenced data into fast memory and leave rarely referenced data in slower memory.


Virtual memory, file storage, and network storage are examples of online memory subsystems. Memory access within these memory subsystems is slower than accessing main memory. However, when a program requests data from one of these three online memory subsystems, the memory device will respond to the request as quickly as its hardware allows. This is not true for the remaining levels in the memory hierarchy.

Most modern computer systems implement a virtual memory scheme that simulates main memory using a mass storage disk drive. A virtual memory subsystem is responsible for transparently copying data between the disk and main memory as programs need it. While disks are significantly slower than main memory, the cost per bit is also three orders of magnitude lower for disks. Therefore, it’s far less expensive to keep data on magnetic storage or on a solid-state drive (SSD) than in main memory.

L1 , L2, L2 are caches come next to CPU registers 

Memory Type | Description
-- | --
Virtual Memory | Simulates main memory using a mass storage disk drive, responsible for copying data between disk and main memory as programs need it, slower than main memory but less expensive
File Storage Memory | Uses disk media to store program data, slower than virtual memory, program's responsibility to store and retrieve data
Network Storage | Keeps data on a different memory system that connects to the computer system via a network, can be virtual memory, file storage memory, or distributed shared memory
Near-line Storage | Uses the same types of media as offline storage, holds the media in a special robotic jukebox device that can automatically mount the desired media when a program requests it
Offline Storage | Keeps its data in electronic form on storage media that are not necessarily connected to the computer system that needs the data, examples include magnetic tapes, unattached external disk drives, disk cartridges, optical disks, USB memory sticks, SD cards, and floppy diskettes
Hardcopy Storage | Printout or manual entry of data, least expensive form of memory for certain data types
Cache Write Policies | Write-through and write-
