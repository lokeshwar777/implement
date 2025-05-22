# Operating System (OS)

1. Functions
   - Interface
   - Resource mgmt and Allocation
   - Memory mgmt and Allocation
   - Isolation and Protection
   - Access to hardware

2. Goals
   - Maximum CPU utilisation
   - avoid Process Starvation
   - High Priority jobs execution
  
3. Types of OS
   1. Single processing OS - MS DOS
   2. Batch processing OS - punch card
   3. Multi programming OS - ready queue, context switching (save & restore), PCB
   4. Multi tasking OS - time sharing
   5. Multi processing OS - CPU > 1, more reliable
   6. Distributed OS - loosely coupled autonomous interconnected computers
   7. Real-time OS - Accuracy++, Error--, Air Traffic Control
   - Examples of each type
   - Program vs Process vs Thread
   - Multi-threading vs Multi-processing vs ...
   - Thread scheduling

4. Components
    1. User Interface (apps run here)
        A. GUI
        B. CLI (terminal, powershell)
        - interacts with kernel
    2. Kernel (heart of OS)
        - access to hardware & interaction
        - Functions
          - Process mgmt (creation, termination, scheduling, synchronisation, communication)
          - Memory mgmt (allocation, deallocation, free space mgmt)
          - File mgmt (create, delete, dir mgmt)
          - I/O mgmt (mgmt & control of I/O devices, spooling, buffering, caching)
        - Types
          - Monolithic (fast & efficient comm, Software Interrupt)
          - Micro (less bulky, more reliable & stable, low performance due to overhead, L4 linux, Symbian OS)
          - Hybrid (combined approach)
          - Nano/Exo
    - IPC (comm between user mode & kernel mode)
        1. shared memory
        2. message passing (logical pipe)

5. System Calls
   - SCI (look for implementation in C)
   - Types (process control, file mgmt, device mgmt, info maintainence, comm mgmt)

6. Booting
   1. Power ON - power supply
   2. CPU loads BIOS (non-volatile chip, uses MBR) / UEFI (BIOS 2.0, uses EFI)
      1. CPU initialisation
      2. goes to a chip (BIOS)
   3. BIOS/UEFI runs tests
      1. loads some settings from a memory area (backed by CMOS battery)
      2. program loads with settings
      3. POST
   4. BIOS/UEFI hands off to boot device (HDD, SSD, CD, USB)
      1. boot loader - program to execute actual OS
      2. MBR - 0th index of disk, old systems, BIOS
      3. EFI - paritition in disk
   5. Boot loader loads the full OS (bootmgr.exe window, boot.efi macOS, GRUB linux)

7. 32-bit vs 64-bit
   - 32-bit CPU can locate (1 << 32) unique addresses (4GB Register)
   - 64-bit CPU can locate (1 << 64) unique addresses (4GB Register)
   1. addressable spaces
   2. resource usage
   3. performance
   4. compatibility

8. Types of Storages
    - Primary memory
      - register - smallest unit of storage
      - cache - additional storage, temporary data
      - main memory
    - Secondary memory
      - electronic, magnetic, optical disks
      - magnetic tapes
    - comparision
      - manufacturing cost - best material
      - access speed
      - storage size
      - volatility

9. Process
   - what - program under execution
   - why - way to perform user work
   - Creation
     1. load the program & static data (used for initialisation) to memory
     2. allocate runtime stack
     3. allocate heap (dynamic allocation)
     4. I/O tasks (unix - input, output, error handles)
     5. OS handoffs control to main (return 0 - successful)
   - Architecture
     - stack, heap, data, text
     - [Diagram](https://app.eraser.io/workspace/CJHlQgMPsTzdtbDjFY6L?origin=share)
     - Problems
       - stack overflow
       - out of memory - deallocate unnecessary objects
   - Attributes
     - process table
     - PCB - process ID,program counter,process state,priority,register,open file list,open devices list
     - [Diagram](https://app.eraser.io/workspace/CJHlQgMPsTzdtbDjFY6L?origin=share)
   - States
     1. lifecycle (generation -> termination)
     2. new state (process being done)
     3. ready (ready queue)
     4. running (CPU allocated)
     5. waiting
     6. terminated
     - job scheduler (LTS - long term scheduler, new -> ready)
     - CPU scheduler (STS - short term scheduer, ready -> running)
     - MTS - medium term scheduler, high degree of multiprogramming
   - swapping - swap space, swap-out, swap-in
   - Context Switching - pure overhead
   - Orphan process (parent is changed to init as the existing parent terminated after forking and child (orphan) still running)
   - Zombie/Defunct process (a child process after execution with resources taken back, when its parent is still waiting)
   - CPU scheduling
     1. Non-preemptive scheduling
     2. Preemptive scheduling
     - Factors
       - starvation
       - CPU utilisation
       - overhead
     - Goals
       1. max CPU utilisation
       2. min TAT, WT, RT
       3. max throughput
     - Algorithms (Gantt chart)
       1. FCFS (convoy effect)
       2. SJF (non-preemptive - convoy effect, preemptive, BT is assumed)
       3. Priority
          - assign priority to each job
          - non-preemptive, preemptive
          - indefinite blocking/waiting or extreme starvation (extreme of convoy effect)
            - solution - ageing (gradually increasing priority of lowest priority job at regular intervals)
       4. RR
          - preemptive version of FCFS (popular)
          - time-sharing & easy to implement but more overhead
          - AT + TQ (alogrithm)
       5. MLQ
          1. (SP) system process - created by OS
          2. (IP) interactive process - user input required
          3. (BP) batch process - (background, no input)
          - each queue has its own scheduling algo
          - SP > IP > BP
       6. MLFQS
          - multiple sub queues
          - inter queue movement is allowed
          - separate process based on BT, I/O, IP with higher priority
          - ageing method is used to increase low priority process
          - flexible, configurable
          - design
            1. no. of queues
            2. scheduling algo in each queue
            3. way to promote or demote a process
            4. conditional allotment
       - comparision between all (design, preemption, convoy effect, overhead)

10. Thread
    - concurrency
    - shared memory/address space
    - thread scheduling - TCB
    - context switching is very fast with less overhead
    - multi-threading
      - profitable only when cores > 1
      - benefits
        1. increased responsiveness
        2. resource sharing
        3. economical
        4. better utilisation of multi-core CPU
    - race condition or critical section problem (shared resource, concurrency)
      - output dependent on thread-scheduling
      - conditions (mutex, progress, bounded/limited waiting not indefinite)
      - solution
        1. atomic operations (`atomic<int>`)
        2. mutual exclusion (locks) - busy waiting
        3. semaphore
      - single flag - rejected as it has a fixed order
      - Peterson's solution - mutex, progress, safe only for 2 threads
      - disadvantages of locks
        1. contention
        2. deadlock
        3. debugging issue
        4. starvation
      - conditional variables (synchronise threads without busy waiting using wait & signal)
      - semaphore
        - int value for multiple instances of a resource
        - binary semaphore = 1
        - counting semaphore > 1
    - classical problems of synchronisation
      1. Producer-Consumer problem/Bounded Buffer problem
         - producer & consumer threads
         - buffer is critical section
         - problem statement
         1. sync between prod & cons
         2. prod shouldn't insert when buffer is full  
         3. cons shouldn't pick when buffer is empty  
         - solution using semaphores = mutex, full, empty
      2. Read-Write problem
         - reader & writer threads
         - readers > 1 (no problem)
         - writer + reader/writer (race condition & data inconsistency)
         - solution - binary semaphores (mutex & wrt), readcnt (int)
      3. Dining-philosopher problem
         - n forks, n philosophers
         - semaphores - each fork (binary semaphore), wait() for acquire a fork, release() to release a fork
         - deadlock (when all pick their right/left fork) prevention
           1. allow atmost n-1 to pick (1 eats rest will wait)
           2. allow to pick only when both are available
           3. odd-even rule (odd-right, even-left or vice-versa)
    - Deadlock
      - bug in process & synchronisation
      - how a process/thread utilise a resource? (request -> use -> release)
      - necessary conditions
        1. mutex
        2. hold & wait
        3. no preemption
        4. circular wait
      - Resource Allocation Graph (RAG)
        - vertices - resources (rect) & processes (circle)
        - edges - request, assi`gn
        - multiple instance (dots ...)
        - system representation
        - no cycle present - no deadlock
        - cycle present - maybe deadlock
      - methods to handle
        1. prevent/avoid deadlock
        2. allow system to go into deadlock -> detect -> recover
        3. Ostrich algorithm - ignore deadlock, assume it never happens
      - prevention
        1. mutex - use locks only for non-sharable resources
        2. hold & wait - check availability of all required resources, assign after release
        3. no preemption - release holding resources & wait, use delays to avoid collision
        4. circular wait - fixed order
      - avoidance
        - current state (no. of processes, allocated, needed, max need)
        - Banker's Algorithm (safe/unsafe state - sequence)
      - detection
        1. single instance - wait-for graph (using RAG, cycle - deadlock, no cycle - no deadlock)
        2. multiple instance - safe/unsafe state using Banker's algo
      - recovery
        1. process termination
        2. resource preemption

11. Memory Management
    - isolation & protection
    1. logical/virtual address space (LAS) (0 to max)
    2. physical address space (PAS) (R + 0 to R + max)
       - base, offset
       - MMU
    - memory mapping (relocation register, address translation (AT), addressing error)
    - LAS -> AT -> PAS
    - Allocation methods in physical memory
      1. Contiguous memory allocation
         1. Fixed partitioning (pre-determined partition size, -- limited size, int & ext frag)
         2. Dynamic partitioning (partition size is declared while allocation, -- ext frag)
      2. Non-Contiguous memory allocation
         1. Paging
            - page (fixed size division of LAS, 16KB - old)
            - frame (fixed size division of PAS)
            - page size == frame size
            - address translation using page table (logical page number, physical frame number) (Array)
              - each process has its own page table
              - logical address = p(page number) + d(offset)
              - physical address = f(frame number) + d(offset)
            - TLB
              - slow to fast
              - caching (Map[page number] -> [frame number])
              - [Paging Diagram]()
              - context switching
                1. TLB flush or reset
                2. ASID (unique identifier)
            - adv & disadv
            - has int frag
            - problem - same type of function in different pages
         2. Segmentation
            - variable partitioning of LAS
            - logical address = s(segment number) + d(offset)
            - [Segmentation Hardware Diagram]()
            - segment table (limit, base)
            - has ext frag
            - adv & disadv
         3. Segmented Paging
    - Free space management
      - free list (Linked List)
      - defragmentation/compaction (merges free partitions, time taking)
      - request hole allocation
        1. first fit (first possible hole, fast & simple)
        2. next fit (start from a saved pointer, enhancement/tweak)
        3. best fit (minimise int frag, slow, major ext frag)
        4. worst fit (largest hole, less ext frag, slow)
    - Virtual memory = RAM + swap area
      - allocate frames to only needed pages
      - store rest of the pages in swap space
      - provides an illusion to the user of having a very big main memory
      - Page Fault - page is in swap area instead of RAM
      - Demand Paging (working?, vaild-invalid bit scheme, pure version, locality of reference)
      - Lazy Swapper
      - Pager (not Swapper (it is for processes))
      - [Virtual memory Diagram]()
      - adv & disadv
    - Page Replacement Algos (PRA)
      - page fault service time - overhead
      1. FIFO
         - belady's anomaly (doesn't follow no. of frames ∝ 1/no. of page faults)
      2. Optimal PRA (no update on successful hits or multiple occurences)
         - best & ideal, min page faults, almost impossible to implement
      3. LRU (update for multiple occurences)
         - implementation
           1. counter based - global shared count variable
           2. stack based
      4. Counting (LFU, MFU)
    - Thrashing (a specific high paging activity scenario)
      - high page-fault rate, less CPU utilisation
      - [Thrashing Diagram]()
      - thrashing point (peak)
      - causes -
      - techniques to handle thrashing
        1. Working set model (concept of locality model)
        2. Page Fault frequency
           - [Diagram]()

12. Storage Management
13. Files & Directories

## Full Forms

- CPU : Central Processing Unit
- PCB : Process Control Block (a data structure)
- TCB : Thread Control Block
- GUI : Graphical User Interface
- CLI : Command Line Interface
- IPC : Inter Process Communication
- SCI : System Call Interface
- BIOS : Basic Input Output System
- UEFI : Unified Extensible Firmware Interface
- CMOS : Complementary Metal-Oxide-Semiconductor
- POST : Power on self-test
- MBR : Master Boot Record
- HDD :
- SSK :
- CD :
- USB :
- AT : Arrival Time
- BT : Burst Time
- CT : Completion Time
- TAT : Turn Around Time = CT - AT
- WT : Waiting Time = TAT - BT
- RT : Response Time
- TQ : Time Quantum
- FCFS : First Come First Serve
- SJF : Shortest Job First
- RR : Round Robin
- MLQ : Multi-level Queue
- MLFQ : Multi-level Feedback Queue
- MMU : Memory Management Unit
- PTBR : Page Table Base Register
- TLB : Transition Look-aside buffer
- ASID : Address Space Identifier
- FIFO : First In First Out
- LRU : Least Recently Used
- LFU : Least Frequently Used
- MFU : Most Frequently Used

- mgmt : management
- dir  : directory
- mutex/lock : mutual exclusion

## Definition

- OS -
- Terminal -
-
- Process -
- Thread - lightweight process, independent execution
- Convoy Effect -
- Critical Section -
- Race Condition -
- Mutual Exclusion
- Semaphore -
- Deadlock -
- Internal Fragmentation -
- External Fragmentation -
- Paging -
- Segmentation -
- Virtual Memory -

## Implementation TODOs

- [ ] All CPU scheduling algos
- [ ] Orphan Child
- [ ] Muiti-threading & concurrency
- [ ] Conditional variables
- [ ] Semaphore
- [ ] Producer-Consumer Problem
- [ ] Read-Write Problem
- [ ] Dining-philosopher Problem
- [ ] Banker's Algorithm
- [ ] Page Replacement Algos - FIFO, Optimal, LRU (counter, stack)

## Reference Pics

<!-- markdownlint-disable MD033 -->
<details>
  <summary>Belady's Anomaly</summary>
  <img src="https://iili.io/3LQnAGf.md.png" alt="Belady's Anomaly">
</details>
<details>
  <summary>Thrashing Scenario</summary>
  <img src="https://iili.io/3LQnR44.md.png" alt="Thrashing Scenario">
</details>
<details>
  <summary>Causes of Thrashing</summary>
  <img src="https://iili.io/3LQn73l.md.png" alt="Causes of Thrashing">
</details>
<!-- markdownlint-enable MD033 -->
