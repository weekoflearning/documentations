







```
graph TB
    subgraph Registers
        R1[Registers]
    end

    subgraph Cache Memory
        C1[Level 1 Cache]
        C2[Level 2 Cache]
        C3[Level 3 Cache]
    end

    subgraph Main Memory
        M1[Main Memory (RAM)]
    end

    subgraph Secondary Storage
        S1[Hard Drives (HDDs)]
        S2[Solid-State Drives (SSDs)]
        S3[Optical Drives]
    end

    subgraph Tertiary Storage
        T1[Magnetic Tapes]
    end

    subgraph Cloud Storage
        CLOUD[Cloud Storage]
    end

    R1 --> C1
    C1 --> C2
    C2 --> C3
    C3 --> M1
    M1 --> S1
    M1 --> S2
    M1 --> S3
    S1 --> T1
    M1 --> CLOUD
```
