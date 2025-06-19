# Computer Networking

> 🧠 Computer Networks = Protocols × Layers + Devices + Routing + Security

1. Networking Basics
   - What is a network & computer networking?
   - types of networks (PAN, LAN, MAN, WAN (SONET, frame relay))
   - topologies (star, ring, mesh, bus, tree)
   - Transmission Media
     - Physical / Guided: underwater, fiber optic, coaxial cables
     - Unguided / Wireless: Bluetooth, WiFi, 3G, 4G, LTE, 5G
   - Data Transmission Concepts
     - Analog vs Digital signals
     - Upload & Download speeds (bits/sec vs bytes/sec)
     - Bit rate vs Bandwidth vs Throughput vs Latency
     - Encapsulation: Transport (segments) → Network (packets) → Data Link (frames)
   - Network Devices
     - Router vs Switch vs Hub vs Modem
     - Gateway, Repeater, Bridge
     - NIC (Network Interface Card)

2. Internet
   - nework of networks
   - ARPANET, 1960
   - History
     - ARPANET (1960s)
     - Evolution into the modern Internet
   - World Wide Web (WWW)
     - Interconnected documents/resources accessed via the Internet
     - Web browser: Tool for rendering web pages, running web apps
     - Search engine: Tool to index and retrieve content from the web
   - Internet Access
     - ISP (Internet Service Providers): Local, regional, global
     - NSP (Network Service Providers): Backbone providers for ISPs

3. Network Reference Models or Layered Protocol Architecture Models
   - define how networks communicate (TCP/IP stack vs OSI)
   - OSI Model
     - 7 Layers overview
     - Responsibilities/functions of each layer
     - Protocols used in each layer
   - TCP/IP Model
     - Comparison with OSI
     - Layers and their protocols

4. Physical Layer (Layer 1)
   - Responsibilities
     - Converts data into bits for transmission
     - Bit-level transmission over medium
     - Physical connections: Cables, connectors
   - Transmission Media
     - Twisted Pair
     - Coaxial Cable
     - Fiber Optic Cable
   - Encoding Schemes
     - NRZ (Non-Return to Zero)
     - Manchester Encoding
   - Performance Factors
     - Bandwidth
     - Signal Attenuation (loss over distance)

5. Data Link Layer (Layer 2)
   - Responsibilities
     - Physical addressing (MAC address)
     - Framing & Error Detection
       - CRC (Cyclic Redundancy Check)
     - Communication within same network (hop-to-hop)
     - MAC or DLL address of sender, IP address of destination
   - Address Resolution
     - ARP (Address Resolution Protocol)
     - ARP Cache (maps IP to MAC)
   - Protocols & Technologies
     - Ethernet Protocol
     - CSMA/CD (Carrier Sense Multiple Access with Collision Detection)
     - Switches (operate at Data Link Layer)
     - LAN (Local Area Network)
   - IP Address Assignment
     - DHCP (Dynamic Host Configuration Protocol) - pool of IPs
       - IP allocation from address pool

6. Network Layer (Layer 3)
   - Responsibilities
   - Communication between different networks
   - Logical addressing (IP address, host vs network ID)
   - Routing & Forwarding
     - Static vs Dynamic Routing
     - Routing Tables & Forwarding Tables
     - Hop-by-hop delivery
     - Routers (control plane = nodes, links = edges)
     - Load balancers
     - TTL (Time To Live)
     - Middleboxes: NAT, PAT, Firewall
   - IP Addressing
     - IPv4 vs IPv6
     - Classes (A, B, C, D, E)
     - Reserved addresses (e.g., 127.0.0.1), loopback
     - Public vs Private IPs
   - Subnetting
     - Concepts: Isolation, Privacy, Security
     - Private IP ranges: 192.*, 172.*, 10.*
     - CIDR notation
     - VPC (Virtual Private Cloud)
   - Routing Protocols
     - Link-State (OSPF)
     - Distance Vector (RIP)
     - Path Vector (BGP – real-world internet backbone)
   - Protocols
     - IP (Internet Protocol)
     - ARP (Address Resolution Protocol)
     - ICMP (used in Ping)

7. Transport Layer (Layer 4)
   - Segmentation & Reassembly
     - Source Port, Destination Port
     - Sequence Number
   - Flow Control
     - Sliding Window Protocol
   - Error Control
     - Checksums
     - Retransmission Timer
   - Multiplexing / Demultiplexing
   - Sockets & Ports
     - 16-bit port numbers
     - Reserved, ephemeral ports
   - Congestion Control
     - Slow Start
     - AIMD (Additive Increase Multiplicative Decrease)
     - Fast Retransmit
   - TCP vs UDP
     - Reliability, connection-oriented vs connectionless
   - Protocols
     - TCP (Transmission Control Protocol) - (3-way handshake)
     - UDP (User Datagram Protocol)

8. Session Layer (Layer 5)
   - Establishes and maintains sessions between endpoints
   - Authentication & Authorization (at session start)
   - Session Management
     - Creation, maintenance, termination
     - Used in protocols like NetBIOS, RPC, SMB

9. Presentation Layer (Layer 6)
    - Translation (syntax conversion between formats)
      - Encoding (e.g., ASCII, UTF-8)
      - Abstraction (standard formats)
    - Encryption (e.g., TLS, SSL)
    - Compression
      - Lossy (JPEG, MP3)
      - Lossless (PNG, ZIP)

10. Application Layer Protocols (Layer 7)
    - Common Protocols
      - HTTP, HTTPS
      - DHCP, SSH, FTP, VNC, Telnet, Mail (SMTP/IMAP/POP3)
    - HTTP vs HTTPS (encryption via TLS/SSL)
    - Cookies
      - Store state (unique string in browser)
      - Third-party cookies
    - DNS (Domain Name System)
      - Maps domain names to IP addresses

11. Web Architecture
    - Client-Server Model (data centers, ping time, RTT)
    - Peer-to-Peer (P2P), e.g., BitTorrent
    - Web Request Flow (Full Stack Path)
      1. DNS Resolution (maps domain to IP) → **Application (7)**
      2. TCP Handshake (2-way, 3-way) → **Transport (4)**
      3. Browser HTTP/S Request Initiation → **Application (7)**
      4. Data Formatting/Encryption (TLS, JSON) → **Presentation (6)**
      5. Session Creation (Auth, Cookies, Cache) → **Session (5)**
      6. Data Segmentation (TCP/UDP, ports) → **Transport (4)**
      7. Data Packet Routing (IP headers, TTL) → **Network (3)**
      8. Data Framing (MAC Address, Ethernet) → **Data Link (2)**
      9. Physical Transmission (Cables, Signals) → **Physical (1)**

12. Performance & Delivery Enhancements
    - CDN (Content Delivery Network)
      - Edge servers, latency reduction, caching
    - Proxy vs Reverse Proxy
      - Proxy: client-side anonymity/cache
      - Reverse Proxy: load balancing, security
    - DNS Load Balancing
      - Distributes traffic across servers using DNS records
    - Real-World Protocols
      - HTTP/2.0: multiplexing, header compression
      - QUIC: faster connection setup over UDP, used by HTTP/3

13. Wireless & Mobile Networks
    - Wi-Fi
      - How Wi-Fi works (radio waves, access points)
      - CSMA/CA (Collision Avoidance)
      - Hidden Terminal Problem
      - Exposed Terminal Problem
    - Cellular Networks
      - 4G basics
      - 5G basics
      - Key differences vs Wi-Fi (handover, coverage, mobility)

14. Network Security
    - TLS/SSL Handshake
    - Firewalls (Types)
    - VPN: What and how it works
    - IDS/IPS (Intrusion Detection/Prevention)
    - HTTPS vs HTTP Internals

15. Tools & Utilities
    - ping, traceroute, netstat
    - nslookup, dig
    - Cisco Packet Tracer
    - Wireshark Tutorial (Packet capture & analysis)

## Deep Dive

- HTTP
  - HTTP (stateless) uses TCP
  - methods (GET, POST, DELETE, PUT, PATCH)
  - status codes
    - 1xx (informational)
    - 2xx (success)
    - 3xx (redirection)
    - 4xx (client error)
    - 5xx (server error)

- mail
  - protocols - SMTP, FTP, POP3, IMAP
  - sender-receiver
  - client, authorise, transaction, POP server

- DNS
  - Name Server
  - Resource Record
  - lookup system
  - Browser -> DNS(domain name - human readable) -> IP Address
  - cname
  - DNS Heirarchy
  - Query Resolution - Iterative, Recursive
  - local DNS server -> root server -> TLD

- UDP
  - conn-less
  - seq num
  - checksum
  - UDP packet structure (src pckt num, dest pckt num, len(datagram), checksum, data)

- TCP
  - conn-oriented, order of data, checksum
  - congestion & error control
  - full duplex (bi-directional)
  - seq num & ack num
  - 3-way handshake
  - flags - SYN, SYNACK, ACK

- IPv4
  - 0 to 256 -> log2(256) = 8 bits * 4 = 32 bits

- IPv6
  - 128 bit
  - 4x larger

- PORTS
  - HTTP : 80
  - HTTPS : 443

## Definitions

- Internet -
- Browser -
- IP Address -
- Router -
- Switch -
- Protocol - set of rules

## Full Forms

- COMPUTER (Backronym) : Common Operating Machine Purposely Used for Technological and Educational Research
- ARPANET : Advanced Research Projects Agency Network
- WWW : World Wide Web
- IP : Internet Protocol
- DNS : Domain Name Server
- PAN, LAN, MAN, WAN : Personal, Local, Metropolitan, Wide Area Network
- ISP : Internet Service Provider
- NSP : Network Service Provider
- OSI : Open Systems Interconnection
- RTT : Round Trip Time
- NIC : Network Interface Card
- TLD : Top Level Domain
- ARP : Address Resolution Protocol
- TTL : Time To Live
- NAT : Network Address Translation
- DHCP : Dynamic Host Configuration Protocol

## References

- [OSI diagram]()
- [DNS resolution tree]()
- [3-way handshake illustration]()
- [HTTPS / TLS handshake illustration]()

## uncategorised
