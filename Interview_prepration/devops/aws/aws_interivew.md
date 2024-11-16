### What are the main uses of an S3 bucket?
### Can we host a static site on an S3 bucket, and how?
### What is an EC2 instance, and how would you deploy a Node.js project in EC2?
### What is SQS?
### How do you decide to use AWS SQS?
### What is DLQ in SQS?
### How would you decide whether to create a REST API or use SQS?
### what do you mean by low latency and high latency (delay)?
### What do you mean by high throughput (​flow capacity)?
    - We can say if any system that have high throughput in low latency that is best application.
### What is Presigned URL in S3?
### How many Type of EBS volume storage.
### What is ingress?
### What is KMS?
- AWS Key Management Service (KMS) is a fully managed service that allows you to create, manage, and control cryptographic keys to encrypt and protect your data. It simplifies encryption and key management by integrating seamlessly with other AWS services and applications.

### What is API Gateway?
    - API Gateway is a fully managed service provided by cloud platforms (e.g., AWS API Gateway) that acts as a central hub for creating, deploying, and managing APIs. It enables developers to expose backend services, such as microservices or serverless functions, securely and efficiently, without the need to build the infrastructure from scratch.
    - [AWS API Gateway Introduction](https://youtu.be/pgpWyn_6zlA?si=gV_TnT-0Y5Pl9ouS)
### What is Cloudfront ?
    - CloudFront is a Content Delivery Network (CDN) service that securely delivers content (e.g., images, videos, web pages) to users with low latency by caching it in multiple edge locations globally.
### What does it mean cloud front ? What is the use of cloud front ?
### How do you deploy your server less application using aws lambda api gateway?
### What is policy section in IAM role?
- The Policy section in an IAM (Identity and Access Management) Role defines the permissions that the role grants to the entities (like users, groups, or services) that assume the role. Policies are written in JSON format and specify the allowed or denied actions that the role can perform on specific AWS resources.
    ```json
    {
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect": "Allow",
        "Action": [
            "s3:GetObject",
            "s3:ListBucket"
        ],
        "Resource": [
            "arn:aws:s3:::my-bucket",
            "arn:aws:s3:::my-bucket/*"
        ]
        },
        {
        "Effect": "Allow",
        "Action": "dynamodb:PutItem",
        "Resource": "arn:aws:dynamodb:us-west-2:123456789012:table/my-table"
        }
    ]
    }
    ```

### What are manned policy and how they are differ from inline policy ?
### What are the d/f type of storage available in S3?