# Development Operations Notes (only theory)

- [Diagrams/Visuals](https://app.eraser.io/workspace/fdm3SNSotaGJg6X0CREf?origin=share)

1. Intro & basic
   - why DevOps - increase org's efficiency
   - DevOps - culture that improves delivery by ensuring
     - automation, quality
     - continuous monitoring/observability
     - continuous testing
   - history & origin
     - system administrator
     - (BRE) build & release engineer
     - server admin

2. Software Development Methodologies
   - SDLC (Software Development Lifecycle)
     - phases
        1. Planning – understand goals, feasibility, scope
        2. Requirements Analysis / Defining – gather and define requirements
        3. Designing – HLD, LLD, create architecture, UI/UX, database design
        4. Implementation / Building – developing, code the application
        5. Testing – verify functionality, security, performance
        6. Deployment – release to production
        7. (Optional but essential) Maintenance – fix bugs, updates post-deployment
     - models (how SDLC is implemented)
       - waterfall
       - agilie
         - deliver in small sprints
         - frameworks
           - scrum - roles, artifacts, events
   - DevOps – culture of collaboration + automate(Building + Testing + Deployment) for faster delivery
   - Agile – iterative approach for flexibility & feedback
   - Lean – eliminate waste, deliver value quickly
   - Spiral – risk-driven cycles combining design + prototyping
   - RAD – rapid dev with user feedback + component reuse
   - V-Model – validation/verification parallel to development
   - Prototype – build early models, gather feedback

3. Project & Collaboration Tools
   - JIRA (project mgmt tool)
     - Supports Agile Methodology (ticket = issue)
       - Scrum
         - sprints
         - sprint retrospective
         - backlog refinement - priorities (fibonacci)
         - timeboxed
         - stand-up by scrum master
         - ceremony - mid-sprint review
       - Kanban: continuous flow, WIP limits
   - Confluence (Knowledge Sharing & Documentation)
     - Collaborative wiki for teams (integrates with JIRA)
   - SharePoint (Knowledge mgmt)
     - Intranet, documents, version control
   - ServiceNow (IT Service Management)
     - Incident, Change, Asset mgmt
     - Automate IT workflows
   - Read the Docs (Developer Docs Platform)
     - Auto-generates docs from code (Sphinx, MkDocs)
     - Good for open-source
     - CI-integrated (builds from repo)
     - Markdown/reStructuredText based

4. Software Development Roles
   1. Business Analyst - interact with customer & gets requirements (BRD)
   2. Product Manger - visions, goals, prioritise/deprioritise
   3. Product Owner - breaks into epics (actionable items) (vision to action)
   4. UI/UX Designer -
   5. Solution/Software Architect - LLD + HLD, structure & framework
   6. Developers - actual prod (UI, APIs, DB)
   7. Database Administrator (DBA) -
   8. Security Engineer - prod & infra security
   9. Quality Engineer (QA) - tests quality & performance
   10. DevOps Engineer - CI/CD , env mgmt
   11. Release Manager (optional) - plans
   12. Site Reliability Engineer (SRE) - uptime, performace & reliability post-release
   13. Technical Writer - docs for users & devs

5. Virutalisation/Virtual Machine (VM)
   - VMs - oracle virtaula box
   - logical isolated env - efficiency
   - Hypervisor
     - software which creates and runs VMs
     - Type1 - bare metal - AWS
     - Type2 - hosted
   - data center - hypervisor installed physical servers

6. Version Control
   - central (single point of failure)
   - git - distributed version control system
   - branching strategy
     - master
     - release
   - clone vs fork
   - merge conflicts
   - merging vs rebasing

7. Config Mgmt
   - Ansible(popular)
     - push
     - agentless
     - dynamic inventory - grouping of servers
     - good support (windows(`winRM`) + linux(`ssh`))
     - simple (`yaml`)
     - share own modules written in python using Ansible Galaxy
     - passwordless auth - public IP in authenticated keys
     - adhoc commands
     - playbook (ansible files)
   - Puppet
     - pull
     - master-slave arch
     - puppet language
   - Chef, Salt
   - config of infra
   - multiple servers

8. Infra as Code
   - OpenStack - on-premise (own cloud) using heat templates
   - Terraform (by Hashicorp)
     - API as code
     - hybrid (multiple CSP)
     - smooth migration
     - automate changes
     - standardise configs
     - lifecycle - write, plan (`terraform.plan`), apply
     - `main.tf`, `inputs.tf` & `outputs.tf`
     - `variables.tf` - env variables
     - `terraform.tfstate`
       - state files to track infra
       - store remotely not local
       - good practices
     - setup
     - module
     - problems

9. CI/CD (automate using pipeline)
   - Continuous Integration Continuous Delivery
   - CI
     - webhooks & declarative pipelines
     - unit testing
     - static code analysis
     - code quality / vulnerability
     - automation
     - reports
     - push image to registry
   - CD
     - deployment
     - GitOps tools
       - Operator Lifecycle Manager(OLM)
       - Argo Image Updator
       - manifests repo (image manifests, helm charts, pod.yml)
       - ArgoCD
   - GitHub hosted runner
   - Jenkins
     - orchestrator
     - java based
     - master & worker nodes (old) - JNLP
     - containers (modern)
       - docker as agent
       - docker-pipeline-plugin
     - multi stage multi agent
     - good for private repos
     - trigger pipelines
       - Poll SCM
       - Build Triggers - too many requests
       - Webhooks - notify on action (most efficient)
     - backups - `rsync` on `~/.jenkins`
     - updates & versions
     - shared modules
     - build apps with N langs using different agents in different stages
     - auto-scaling groups
     - plugins
     - freestyle (legacy)
     - maven - clean install/package - `pom.xml`
     - sonarqube
     - declarative pipelines are better
   - GitHub Actions
     - platform agnostic
     - template
     - self-hosted runners - security, private data
     - no hosting, no maintainence
     - use complete GitHub features - dependabot, secrets & keys, ...
     - good for open-source, only GitHub/ public projects

10. Containers
    - VM (tight coupling)
      - full OS (guest + host)
      - easy to start, shared environment
      - risk of conflicts (deps, PORTS)
      - less scalable (heavyweight, boot time)
    - container (loose coupling)
      - lightweight (shares host OS kernel)
      - isolated runtime per app
      - scalable (fast spin, low resource use)
      - clean & portable (same behaviour everywhere)
    - uses resources from base/host image/OS (VM or physical server)
    - package/bundle = app + deps(app + system)
    - lifecycle -> file -> image (base) -> container
    - image
    - tagging
    - logical isolation
    - Docker
      - implements containerisation
      - dockerfile
        - `ENTRYPOINT`(non override) vs `CMD`(configurable/override)
        - `ADD` (URL) vs `COPY` (host system files)
        - execute image
        - create container
        - do not use `latest` for images
      - registry - docker hub - centralised place to store images
      - CLI
      - docker engine
      - daemon
          - heart
          - monlith process
          - only runs with root user (risky)
      - multi-stage docker builds
          - rich base image (all deps)
          - countless stages
          - distroless image
            - single final stage
            - minimalistic image
            - only runtime environment
            - reduce size + high security
      - bind mount (dev)
        1. links local directory to container
        2. make changes locally or inside container
        3. changes sync both ways instantly
        - tied to specific host paths, less portable
      - volume (prod)
        - ephermeral (short-lived)
        - managed, portable, persistent & shared storage
        - `Docker volume = folder + Docker’s management layer (extra)`
      - networking
        - communication between containers & host
        - containers <--> host
          - bridge networking (default, in-built)
            - single bridge = veth0 (virtual ethernet) / docker0
            - virtual/custom bridge for secure network (eg : financial transactions)
              - isolate networking
          - host networking
            - bind container with subnet of host
            - not secure
            - `"IP Address":""` - empty
          - overlay networking
            - COEs (container orchestration engines) - KSS, swarm
            - tunnel / multiple connections
          - macVlan
            - container as a physical host rather than a network
        - containers <--> containers
          - shouldn't in case of finance related
      - [compose docs](https://docs.docker.com/compose/)
        - not a replacement for docker
        - Multi container application
        - `yaml` or `yml` file - `services:`
        - port mapping
        - best for local development
        - common network(bridge) between containers (3-tier/multiple services)
        - [examples](https://github.com/docker/awesome-compose)
    - alternatives - solve SPoF (Single Point of Failure) using layers
      - Buildah
      - Podman

11. Kubernetes (K8s)
    - Docker
      - container platform
      - problems
        - single host
        - no auto healing (killed container can't start by itself, manual restart)
        - no auto scaling
        - no Enterprise level support (load balancing, firewall, API gateway)
      - not used in prod
    - Kubernetes = container orchestration platform
      - cluster (group of nodes)
      - master/node architecture
      - replica set & replica controller - `yaml` files
      - auto healing -> controls & fixes the damage (rollout a new container)
    - history/origin
      - Google -> Borg
    - architecture
      1. worker/data plane
         1. kubelet (creation of pods)
         2. kube-proxy (networking & IP tables)
         3. container runtime - dockershim/crio/containerd
      2. master/control plane
         1. API Server (heart, decides info)
         2. scheduler (acts on the info)
         3. controller manager (replica set)
         4. cloud controller manager
         5. etcd (key-value store - objects, cluster info)
    - pod
      - a group of one or more containers
        - share the same IP address (shared network)
        - share storage volumes (shared memory)
        - can communicate via `localhost`
        - scheduled together
      - `pod.yaml` - single config file (running specification)
      - pod patterns
        - multi-container pod
          - sidecar pattern
            - secondary container inside the same pod that supports the main app
            - logging agents, proxy, config reloader
    - deployment
      - controller creates replica set from config file
      - default & custom controllers
    - replica set & HPA (Horizontal Pod Autoscalers)
      - ensures a spefic behaviour is implemented
      - healing & scaling
      - creates pods
    - networking
      - service (svc)
        1. service discovery - labels & selectors instead of IPAddr (templates)
        2. kube-proxy - load balancer
        3. exposing app to world
        - types / service creation
          1. ClusterIP mode (inside cluster, default)
             - accessible from other pods & services inside cluster
          2. NodePort mode (outside cluseter, within network/org/worker node - EC2 instance, VPC)
             - useful for internal/limited external access - NODEIP:STATICPORT
          3. LoadBalancer mode (internet via public IP address)
            - works only with CSPs
            - external load balancer provisioned via cloud controller manager
      - Ingress
        - service
          1. missing Enterprise & secure (TLS) loadbalancing
          2. CSP load balancer - expensive (static IP addrs)
        - ingress controller (load balancer + API Gateway)
          - specific for CSPs
        - host & path based routing
        - maps route/endpoint to service (like `/auth` → `auth-service`)
    - RBAC
      - define access
      1. service accounts / users
         - offload user mgmt
         - external identity provider
         - IAM OAuth Provider
      2. roles / cluster role
         - namespaces & permissions
      3. role binding / cluster role binding
    - extend API resource
      - custom resource definition (CRD)
        - define a new type of API to K8s through a `YAML` file
      - custom resource (CR)
        - validate CR
      - custom controller (`Golang`)
        - own watcher - notifies & performs required action
        - `client-go` (API server - in-built watchers, reflector)
    - operator
    - configmaps (`data`)
      - store non-sensitive data which can be used later
      - can't change data in pod
      - if changed pod requires restart so use volume mount
    - secrets (`env`)
      - sensitive data
      - data at rest - encrypted
      - RBAC - least privilege
    - monitoring
      - Helm charts
      - Prometheus
        - time-series DB (timestamps)
        - metrics from `/metrics` endpoint of K8s API Server (kube state metrics)
        - alert manager & notifications
        - PromQL (Prometheus queries)
        - metrics server
      - Graphana
        - charts & visuals using a data source
    - tools
      - cluster lifecycle mgmt
        - kops (modern)
        - kubeadm (legacy, manual)
        - minikube - local single-node dev cluster
      - kubectl - CLI for cluster interaction
      - kubeshark - debugging/inspection (view traffic)
      - hyperkit - VM on macOS
    - alternatives
      - [openshift](https://developers.redhat.com/developer-sandbox)
      - rancher
      - tanzu
      - EKS
      - AKS
      - GKE
      - DKE

## Checklist

- [ ] make your own compute instance using virtualbox and access it using network
- [ ] deploy your nodejs app on AWS
- [ ] CI/CD for a nodejs app (MERN), Django, 2-tier, 3-tier
- [ ] dockerfile for 2-tier and 3-tier
- [ ] docker componse for 2-tier and 3-tier

## Caveats / Things to keep in mind

- expose PORT (inbound rules)
- handling secrets and other sensitive information

## References / Visuals / Key Concepts

- multi-stage docker builds

    ```bash
    # WITHOUT multistage:
    [ instance ] → src + node_modules + dist + .env + Vite + extras
                ~600–800 MB (bloated, dev tools included)

    # WITH multistage:
    [ instance ] → dist only (served by nginx or static server)
                ~80–100 MB (clean, production-ready)
    ```

- hosted vs self-hosted
Yes, that’s perfectly correct and clear! Here’s a slightly polished version for clarity:

---

- Bind mounts & volumes

    ```bash
    [ Source: Host folder or Docker volume ] <--> [ Target: Container folder ]
    ```

    ```bash
    docker run -v <source-path>:<container-path> <image-name>
    ```

    Bind mount: explicit local host path  
    `<source-path>` = `<local-directory-path>`

    Volume: Docker-managed storage (hidden path on host)  
    `<source-path>` = `<volume-name>`

- Docker File vs Docker Compose (for 3-tier)
  - using dockerfile (sequence of steps & multiple files)
    1. Crete network (secure and common between containers)
    2. docker file for frontend
    3. DB volume
    4. docker file for backend
  - using docker compose (single file with a flow)
    1. `docker-compose.yaml` - services, dependencies, nework, volumes

- [sample Custom Controller](https://github.com/kubernetes/sample-controller)

- Docker Phase
  1. source code - raw code, input for app & Dockerfile build
  2. Dockerfile - script describing how to build a docker images
  3. build - process (Dockerfile -> Image)
  4. Artifacts - build outputs (Images), packaged binaries
  5. Snapshot - immutable saved state of image/container/file system
  6. Image - portable app template (immutable snapshot of app + required env)
  7. Container - running instance of an image (lightweight VM running your app)
  8. Volume - persistance, K8s/Docker-managed storage, stores data outside container lifecycle/pod
  9. Database - structured data store, runs inside container & uses volume
  10. app - running program in a container built from source code
  - Internals
    1. Docker - platform/tool that build, manage & run containerised apps using images, volumes & networks
    2. Docker CLI - sends commands to Docker Daemon (via Unix socket:`/var/run/docker.sock`)
    3. `dockerd` (Docker Daemon) - orhestrates container lifecycle (pull, build, run), delegates to `containerd`
    4. `containerd` - core container runtime, manages container lifecycle & image layers, spawns runc
    5. `runc` - low-level OCI runtime, applies isolation (namespaces & cgroups), starts container main process (PID1)
    6. Namespaces - isolate (process, network, users, mount, PID)
    7. Cgroups (Control Groups) - control & monitor resource limits (CPU, RAM, I/O)
    8. OverlayFS - image layers -> unified & writeable filesystem
    9. Docker Compose - define & run multi-container apps using a single declarative YAML file (`docker-compose.yml` or `.yaml`)
    10. Docker Swarm - native Docker's tool to orchestrate containers across multiple nodes + scaling, self-healing & load balancing
  - Colima -
  - Podman (Dockerless)
    1. `crun` - lightweight & faster alternative to `runc`, rootless container

- Kubernetes Phase
  1. App Declaration
     - YAML manifest - declarative contract, defines pods, contaiers, services, ...
     - Pod - smallest deployable unit in K8s, wraps atleast 1 tightly coupled container with shared memory & network
  2. Submitting to K8
     - `kubectl apply` - submit to K8s API Server
     - API server - central gateway, validates YAML manifest, stores in `etcd`, notifies Scheduler
     - `etcd` - distributed key-value pair that stores cluster state (desired + current)
  3. Cluster & Node setup
     - Cluster - group of nodes managed by control plane, acting as one logical system
     - Node - worker machine (VM/physical) that runs pods, (agent (`kubelet`) + container runtime (`containerd`) + networking (`kube-proxy`))
     - Scheduler - assign pod to best-fit node based on resouce needs & policies
  4. Container Execution
     - `kubelet` - pulls image, coordinates with `containerd`, start container inside pod (like Docker)
     - pod assigned -> `kubelet` triggers CRI-O -> uses `runc` -> runs isolated container (Linux namespaces + cgroups)
  5. Logical Grouping
     - Namespace - logically isolate resources (pods, services, deployment) within cluster
  6. Resource Creation & Mgmt
     - deploy - creating resources (pods, services,...) via manifest/CLI
     - Deployment - a controller that manages replicas, rollout/update, rollback
  - Internals
    - Kubernetes/K8s - automating deployment, scaling, mgmt of containerised apps
    - Control Plane - brain of cluster, schedules pods, ensures desired state by scheduling, watching & responding to events
    - Controller Manager - watches `etcd` and reconciles state using in-built controllers
    - Replica Set - ensure required pod replicas are always running (pod-to-pod, pod-to-service comm)
    - kube-proxy - configure network rules on each node
    - `minikube` - lightweight tool to run a single-node K8s cluster locally
    - `kind` (K8s in Docker) - run multi-node K8s clusters inside Docker containers

  ```bash
  Image       = Source Code + Dependencies + Dockerfile (built artifact)
  Container   = Running instance of an Image
  Pod         = ≥ 1 Container sharing network/storage (smallest deployable unit)
  Node        = Machine running ≥ 1 Pod (via kubelet + container runtime)
  Cluster     = Group of Nodes managed by control plane
  Namespace   = Logical partition inside a Cluster for resource isolation
  ```

- K8s cross-cutting layers
  - Service - stable network endpoint exposing set of pods with load balancing
  - Ingress - HTTP/HTTPS gateway that exposes multiple services externally with domain/path-based routing, SSL, ...
  - CNI Plugins - pod networking
  - Network Policies - firewall rules

- Docker vs K8s
  - docker containers run inside the Docker Desktop created hidden linux VM  inside macOS (via Hyperkit (intel) / Apple Virtualisation (silicon))
  - smallest unit -> container(Docker), pod(K8s)
  - even if there is 1 container, K8s wraps it in a pod
  - 1 node still counts as a cluster
  - K8s can't directly run bare image or container - it runs pods
  - orchestrate = control(scheduling,network) + automate(scaling,healing) + manage (update,rollback,resource usage)
  - Docker Swarm - quick & simple setups
  - K8s - scalable, production-grade setups, cloud-native tools

- Docker Arch
  1. Docker CLI
  2. Docker Daemon (`dockerd`)
  3. Docker REST API
  4. Docker Objects (images, containers, network, volumes)
  5. Container Runtime
  6. Docker Registry

- K8s Arch
  
  - Control Plane / Master Node Components
    - API Server
      - `kubectl`
    - etcd
    - Scheduler
    - Controller Manager
      - Deployment Controller
      - Replica Set Controller
      - Node Controller
      - Job Controller
    - Cloud Controller Manager
      - interfaces with cloud providers (load balancers, volume)
  
  - Data Plane / Worker Node Components
    - kubelet
    - container runtime
      - `containerd`
      - CRI-O (Container Runtime Interface - Open)
      - `docker shim` (deprecated)
    - kube-proxy
  
  - Networking Layer (cross-cutting)
    - service
      - Service Discovery
      - kube-proxy
      - Expose the app
      - Types - ClusterIP (default), NodePort, LoadBalancer
    - Ingress
      - expose HTTP routes using Ingress Controller (NGINX, Traefik)
    - CNI (Container Network Interface) plugins
      - Flannel, Calico, Weave, Cilium, Canal
  
  - Configuration & Workload Layer (cross-cutting)
    - YAML manifests
    - Namespaces
    - Deployments
    - StatefulSets
    - DaemonSets
    - Jobs/CronJobs
    - ConfigMaps
    - Secrets
    - Volume
  
  - Storage Layer (cross-cutting)
    - Volume
    - PersistVolume (PV)
    - PersistVolumeClaim (PVC)
    - StorageClass
  
  - Security Layer (cross-cutting)
    - RBAC
    - Service Accounts
    - Network Policies
    - Pod Security Standards
  
  - Authentication Layer (cross-cutting)
    - Token-based authentication (ServiceAccount tokens)
    - Client certificate auth
    - OpenID Connect (OIDC) support
  
  - Logging Layer (cross-cutting)
    - Fluentd
    - Loki
    - ElasticSearch
    - Container stdout/stderr
  
  - Monitoring Layer (cross-cutting)
    - Prometheus
    - Grafana
    - Jaeger/OpenTelemetry
  
  - Service Mesh Layer (cross-cutting)
    - Istio/Linkerd
    - Envoy
  
  - Autoscaling Layer (cross-cutting)
    - HPA (Horizontal Pod Autoscaler)
    - VPA (Vertical Pod Autoscaler)
    - Cluster Autoscaler (add/remove nodes)

## uncategorised

## Extra (restructure later)

- Networking & communication
  - cluster <--> cluster - no but service mesh,...
  - cluster <--> node (mgmt) - Control plane manages/schedules
  - cluster <--> pod (indirect) - API Server -> kubelet -> container runtime
  - node <--> node -  flat networking (VPC / CNI plugins)
  - pod <--> pod - pod IP or ClusterIP service
  - pod <--> container - shared localhost & memory
  - container <--> container (same pod only) - via localhost
  - external user <--> pod - NodePort or LoadBalancer

- Why We Don't Care About Nodes in Day-to-Day Usage
  - Pods run your containers — that’s where your actual app lives
  - Services route traffic to pods, not to nodes
  - Pods can move between nodes anytime (failures, scaling)
  - Nodes are just infrastructure (VMs or machines); apps are decoupled from them
  - Services use labels, not IPs or node info, to target pods
  - Cluster = group of nodes, but app logic runs at the pod laye

- Layered Path

    ```bash
    User (browser, API call)
            ↓
    LoadBalancer / NodePort / ClusterIP
            ↓
    Service (stable endpoint)
            ↓
    Matching Pod (via label selector)
            ↓
    Container (your code runs here)
            ↓
    Responds to request
    ```

- service types

    ```bash
    | App Component   | Service Type | Who Can Access         | Used For                            |
    | --------------- | ------------ | ---------------------- | ----------------------------------- |
    | Frontend (UI)   | LoadBalancer | Anyone (via public IP) | Public-facing UI / Production apps  |
    | Dev test UI     | NodePort     | Anyone (via node IP)   | Dev/testing without cloud LB        |
    | Backend API     | ClusterIP    | Inside the cluster     | Frontend → Backend communication    |
    | Payment Service | ClusterIP    | Inside the cluster     | Internal microservice communication |
    | Database        | ClusterIP    | Inside the cluster     | Secure backend → DB access          |

    ```
