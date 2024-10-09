what is latency?
What is throughput?
What is Presigned URL in S3?
How many Type of EBS volume storage.

Types of EBS Volume Storage
Amazon Elastic Block Store (EBS) provides different types of volume storage to cater to various use cases and performance requirements. Here are the main types of EBS volumes:

General Purpose SSD (gp2 and gp3)

gp2: Balances price and performance for a wide variety of workloads.
gp3: Offers higher performance at a lower cost compared to gp2, with the ability to provision IOPS and throughput independently.
Provisioned IOPS SSD (io1 and io2)

io1: Designed for I/O-intensive applications such as databases. Allows you to provision a specific IOPS rate.
io2: Offers higher durability and more IOPS per GiB compared to io1.
Throughput Optimized HDD (st1)

st1: Designed for frequently accessed, throughput-intensive workloads such as big data and data warehouses.
Cold HDD (sc1)

sc1: Designed for less frequently accessed workloads with large, sequential I/O patterns, such as archival storage.
Magnetic (Standard)

Standard: Previous generation magnetic storage, suitable for workloads where data is infrequently accessed. This type is being phased out in favor of SSD and HDD options.
Summary
General Purpose SSD (gp2, gp3): Balanced performance and cost.
Provisioned IOPS SSD (io1, io2): High performance for I/O-intensive applications.
Throughput Optimized HDD (st1): High throughput for frequently accessed data.
Cold HDD (sc1): Low-cost storage for infrequently accessed data.
Magnetic (Standard): Legacy magnetic storage, being phased out.



Storage Option

Description

Pros

Cons

Incurred Price

Amazon EBS (Elastic Block Store) 

EBS provides block storage that can be attached to EC2 instances, allowing dynamic storage increases as needed.                                                            

High performance with low-latency access. 

 Dynamically resizable based on load.

Suitable for attaching to specific EC2 instances.

Easy to Implement (2-3ptr from backend side)                                                       and need help cloud ops to setup this infra.

Bound to specific EC2 instances, limiting flexibility across multiple services. 

Requires careful management during high traffic to avoid storage limitations.                   

Charged based on provisioned storage, regardless of how much is used.

EBS snapshots and IOPS (input/output) also incur additional charges. 

Amazon EFS (Elastic File System) 

A scalable, managed file storage system that can be mounted on multiple EC2 instances. It scales automatically as storage needs change.                                    

Automatically scales, removing the need to manage capacity. 

 Accessible by multiple EC2 instances, offering flexibility for distributed applications.

Easy to manage and secure.           

Higher latency than EBS, less ideal for high-performance needs. 

Pricing can be higher for large amounts of storage.                                                                

Charged for the amount of storage used and data transfer. 

EFS has pricing for standard (frequent access) and infrequent access storage classes. 

Amazon S3 (Simple Storage Service) (Recommended) 

S3 is an object storage service that provides highly scalable, durable, and secure storage for any amount of data, suitable for uploading files before processing.         

Highly scalable, accommodating any file size or number of uploads. 

Cost-effective: Only pay for the storage used. 

Accessible globally, ideal for distributed architectures. 

Integration with CloudOps (monitoring, lifecycle management, archiving). 

Slightly higher latency than EBS, but suitable for most file upload cases. 

Requires additional logic for file chunking and multipart uploads.                                     

Charged for the amount of storage used, requests (PUT, GET), and data transfer.

Lifecycle storage options (Standard, IA, Glacier) for cost efficiency. 

Key Points:

Amazon EBS: Best for performance-critical applications needing low-latency access, but storage is tied to specific EC2 instances. Prices are based on provisioned capacity.

Amazon EFS: Best for shared access across multiple EC2 instances, automatically scalable, but can have higher costs, especially with large datasets. Prices are based on storage used.

Amazon S3: Best for highly scalable, cost-effective object storage. Storage is dynamic, and only the actual usage is billed, with additional charges for data transfer and operations.

The table provides a comparative view of each option and clarifies why S3 is recommended for your use case (scalable uploads with minimal management overhead and cost efficiency).