# Observability Notes (only theory)

> Observability = metrics + logs + traces  
> Monitoring = metrics + alerts + dashboards

1. Intro & basic
   - metrics - what is state of the system
   - logs - why is state of the system
   - traces  - how to fix it
   - monitoring - subpart of observability
   - SLA ()
   - collective effort (developers + SREs)

2. Metrics
   - historical data of events to understand health of the system
   - raw info so feed to a monitoring system -> dashboard
   - types
     - counter - incrementing
     - gauge - incrementing + decrementing
     - histogram - bucket ()
     - summary
   - custom metrics Instrumentation
   - scraping using Prom client at `/metrics`

3. Logs/Logging
   - understand app better
   - centralised logging system with search functionality
   - EFK Stack
     - ElasticSearch (ES)
       - DB to store logs
       - connect ES (inside EKS) with AWS EBS for snapshots using IAM role & CSA driver
     - FluentBit - daemon set on every node, collet logs from pods and sends to ES, log forwarder
     - Kibana - visualisation dashboard (~Grafana)
   - ELK Stack
     - Logstash - log aggregator, (overkill as FluentBit is enough)

4. Traces/Tracing
   - extensive info to debug, troubleshoot & fix the issue
   - instrumentation by developer
   - implmentation by DevOps Engineer (Jaeger)
   - fix latency issues

5. Monitoring
   - continuous feedback
   - scrapes/pulls metrics -> visuals (dashboard, graphs)
   - fire alerts / notify
   - push/pull mechanisms

- Prometheus
  - Prometheus + Grafana + AlertManager- monitoring stack
  - CNCF 2nd project - strong community
  - exporter - retrive metrics from apps
  - Architecture
    - scraping
      - node exporter
        - infra metrics (CPU, memory)
        - runs as daemon
      - kube-state-metrics
        - API server (kubernetes cluster)
      - `/metrics`
        - endpoint using server
        - custom metrics related to app
        - developers (login, http)
    - TSDB (Time Series Database)
      - PromQL

- Grafana
  - visualisation & dashboard platform
  - authentication & authorization
  - executes PromQL queries in Prometheus

- Jaeger
  - components
    1. agent - gets traces (if instrumentation is implemented)
    2. collector - stores info/traces
    3. DB - ElasticSearch, Cassandra
    4. UI - alerts  

- OpenTelemetry
  - omit metrics, logs, traces
  - receiver
  - process
  - exporter