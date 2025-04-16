# HLD

1. system? design? system design? - user + requirements + components

2. client-server arch
   - 2 tier - light weight
   - 3 tier - too much data
   - n tier - complex applications
   - thin client - serve images or text files and less logical manipulation
   - thick client - right GUI, too much processing

3. proxies
   - forward
   - reverse

4. data
   - data flow mechanisms, format, queues, caches, indices, apis, events, messages,
   - data generation-users, internal, logs, analytics,
   - type of data, volume, consumption, security, (transactions)

5. Databases
   - relational, non relational- schema, ACID
   - relational-tables, non-relational-key:values stores, caching,(req:res)
   - document based db - heavy reads and writes, docs and collections,
   - no sql- sharding, aggregation queries
   - column db - fixed schema, event data, iot devices, support distributed dbs, special reads
   - search db-advanced indexes
  
6. applications/services
   - client app, backend app,
   - elements of app design- requirements, layer, tech stack, code structure or design pattern, data store interactions, performance/cost, deployment, monitoring, operational excellence/reliability
  
7. APIs (Application Programming Interface)
   - advantages - communication, abstraction, platform agnostic
   - examples - private, public, web api, sdk/library apis
   - factors - API contracts, documentation, data format, security
  
8. Caching
   - a hardware or software component which helps in serving the data which is frequently requested or expensive to compute
   - warming of the cache, cache expiry - TTL(time to live)
   - removing, updating for revalidation
   - cache eviction - FIFO, LRU, LFU
   - cache aside strategy/pattern
   - read through strategy/pattern
   - write through strategy/pattern

9. REST API
   - Representational State Transfer
   - guidelines - client & server, cacheable, layered, stateless, uniform interface, code on demand
   - Book Catalog example
   - http method, URI, payload, response
   - GET, POST, PUT(upsert,replace), DELETE, PATCH(apply changes), OPTIONS
   - state transfer (data) vs stateless (all client req are same)
   - parameters - path, query
   - http res - 200,201,300,400,…
   1. data/resource, representation, representaional state, URI (api endpoint/path), parameter(path,query), req payload, res body, res codes(HTTP status codes), headers(metadata), error messages,
   2. idempotency, limit, offset, upsert
   3. filtering(optional) and pagination(always)
   4. asynchronous apis - in progress, completed, failed
   5. rate limiting
      1. calls per second, queuing requests(fallback), (public apis)API keys, cascading failure
      2. methods - token bucket, leaky bucket, fixed window, sliding window
   6. headers - request(key:value), response(info), payload, representation(data,content-*), custom

10. Message queues

    - communication - synchronous vs asynchronous (customer, online store, invoice)
    - factors - ordering (ordered, unordered), consumption (one to one, one to many)
    - producer consumer model
    - pub/sub
    - ordered queues
    - unordered queues -  retry or failed queue or dead letter queue
    - decoupling jobs

11. Publisher-Subscriber

    - hospital - pagers - interns
    - producer=publisher, consumer=subscriber
    - priority queue
    - avoid duplication of messages
    - use cases
         1. async workflow
         2. decoupling
         3. load balancing
         4. deferred processsing
         5. data streaming
    - do not use in realtime and avoid overkill

12. Performance Metrics
    - resources -
    - throughput - load/time taken = word done/time - some amount of work done in a particular time, number of API calls served per unit time
    - bandwidth - resource utilisation and throughput depends on this, adjustment required for performance
    - response time  or latency -
    - finally - we need to properly adjust bandwidth and response time for better resource utilisation, more throughput thereby reducing cost and increasing performance
    - Performance Metrics of components of software
    - Instances - memory, RAM, CPU
    - API - response time, throughput, error occurrences, bugs/defects
    - Databases - query time, no. of queries, schema design, memory aspect
    - Cache - latency, eviction and invalidation strategy, memory
    - Message queues - rate of production and consumption, stale or unprocessed, no. of consumers
    - Workers -
    - Performance Management - PM tools -
  
13. Fault and failure in distributed systems
    - fault is a cause of failure
    - transient and permanent faults

14. Scaling
    - vertical - increasing capacity of resource
    - horizontal - increasing no. of resources
    - handle increased load
    - not complex
    - increase in preformance

15. Database Replication
    - master or primary ↔ slave or secondary (replica)
    - helps reduce latency
    - replication lag
    - consistency models
    - synchronous - solves consistency issues - lag is zero - performance might get a hit
    - asynchronous - background , inconsistencies
    - semi-synchronous -
    - snapshot - a state of db at a particular time, provides rollback

16. CAP Theorem
    - example - cloud kitchen with your partner
    - Consistency - inconsistency leads to bad customer experience
    - Availability -
    - Partitioning - partition tolerance, communication channel
  
17. DB Sharding (partitioning)
    - partitioning the data - horizontal and vertical
    - sharding - logical, physical
    - strategies - algorithmic, dynamic
    - key based sharding - hashing,shard key (primary key or combination) should be static
    - range based sharding - hotspot (uneven distribution of data)
    - directory based sharding - latency because of lookup table, replica

18. Hashing
    - hashcode, hash function,collision,caching (hash brows - dish)
    - consistent hashing - minimise movement of data during scaling up and down, circular representation, mapping values to servers, removing servers with replicas,

## Approach in an Interview

1. functional requirements - system or components of system
2. non-functional requirements (startups - skip) - resource allocation based on estimation
3. Capacity estimaltion
   1. tech choices based on approximate calculations (rounding off)
   2. power of 2, metric system (1e6,9,12), memorise, latency numbers
   3. reads/writes, transactions, data transfer, requests, servers, load balancing
   4. 1 mil/day = 12/sec
4. Mistakes - ask for requirements and understand, scalability, trade-offs between multiple solutions, bottlenecks and failures, i don’t know,

> Source : [sudoCODE](https://youtube.com/playlist?list=PLTCrU9sGyburBw9wNOHebv9SjlE4Elv5a&si=mTHnYCsZMIUQYyYn)
