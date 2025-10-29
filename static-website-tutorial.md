# 🚀 Deploy a Static Website with Amazon S3 and CloudFront Using AWS CloudFormation

This tutorial will guide you step by step to deploy a **fully automated static website** using **Amazon S3** and **Amazon CloudFront** through an **AWS CloudFormation** template.  
No more manual steps in the AWS Console — everything is done as code.

---

## 🧰 Prerequisites

- An active [AWS account](https://aws.amazon.com).
- AWS CLI installed and configured (`aws configure`).
- Basic familiarity with S3 and CloudFront.
- A static website (e.g., `index.html`, `index.css`, `avatar.png`).

---

## 📄 Step 1: Create the CloudFormation Template

Save the following content into a file named **`static-website.yml`**:

```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: >
  Static website hosting using Amazon S3 and CloudFront with Origin Access Control (OAC).

Parameters:
  BucketName:
    Type: String
    Description: Unique name for the S3 bucket (must be globally unique).
  DefaultRootObject:
    Type: String
    Default: index.html
    Description: The default root object for the CloudFront distribution.

Resources:
  # 1. Create S3 bucket
  WebsiteBucket:
    Type: AWS::S3::Bucket
    Properties:
      BucketName: !Ref BucketName
      PublicAccessBlockConfiguration:
        BlockPublicAcls: true
        BlockPublicPolicy: true
        IgnorePublicAcls: true
        RestrictPublicBuckets: true
      OwnershipControls:
        Rules:
          - ObjectOwnership: BucketOwnerEnforced
      VersioningConfiguration:
        Status: Suspended
    DeletionPolicy: Delete

  # 2. Create Origin Access Control (OAC) for CloudFront
  WebsiteOAC:
    Type: AWS::CloudFront::OriginAccessControl
    Properties:
      OriginAccessControlConfig:
        Name: !Sub "OAC-for-${BucketName}"
        Description: Origin Access Control for CloudFront to access S3
        SigningBehavior: always
        SigningProtocol: sigv4
        OriginAccessControlOriginType: s3

  # 3. Create CloudFront Distribution
  WebsiteDistribution:
    Type: AWS::CloudFront::Distribution
    Properties:
      DistributionConfig:
        Enabled: true
        Comment: !Sub "CloudFront distribution for ${BucketName} website"
        DefaultRootObject: !Ref DefaultRootObject
        Restrictions:
          GeoRestriction:
            RestrictionType: whitelist
            Locations:
              - US
              - CA
              - PE
        Origins:
          - Id: S3Origin
            DomainName: !GetAtt WebsiteBucket.RegionalDomainName
            S3OriginConfig: {}
            OriginAccessControlId: !Ref WebsiteOAC
        DefaultCacheBehavior:
          TargetOriginId: S3Origin
          ViewerProtocolPolicy: redirect-to-https
          AllowedMethods:
            - GET
            - HEAD
          CachedMethods:
            - GET
            - HEAD
          Compress: true
          CachePolicyId: 658327ea-f89d-4fab-a63d-7e88639e58f6 # Managed-CachingOptimized
        PriceClass: PriceClass_100
        ViewerCertificate:
          CloudFrontDefaultCertificate: true
        HttpVersion: http2
        IPV6Enabled: true

  # 4. Add Bucket Policy to allow CloudFront access
  WebsiteBucketPolicy:
    Type: AWS::S3::BucketPolicy
    Properties:
      Bucket: !Ref WebsiteBucket
      PolicyDocument:
        Version: "2012-10-17"
        Statement:
          - Sid: AllowCloudFrontServicePrincipal
            Effect: Allow
            Principal:
              Service: cloudfront.amazonaws.com
            Action: s3:GetObject
            Resource: !Sub "${WebsiteBucket.Arn}/*"
            Condition:
              StringEquals:
                AWS:SourceArn: !Sub "arn:aws:cloudfront::${AWS::AccountId}:distribution/${WebsiteDistribution}"

Outputs:
  BucketName:
    Description: Name of the created S3 bucket.
    Value: !Ref WebsiteBucket

  BucketWebsiteURL:
    Description: Regional S3 URL (not a static website URL since we're using OAC).
    Value: !GetAtt WebsiteBucket.RegionalDomainName

  CloudFrontDomainName:
    Description: The CloudFront distribution domain name.
    Value: !GetAtt WebsiteDistribution.DomainName

  CloudFrontDistributionId:
    Description: The CloudFront distribution ID.
    Value: !Ref WebsiteDistribution

```

---

## ☁️ Step 2: Deploy the Stack

1. Go to **CloudFormation Console** → [https://console.aws.amazon.com/cloudformation](https://console.aws.amazon.com/cloudformation)
2. Click **“Create stack” → “With new resources (standard)”**.
3. Upload your `static-website.yml` file.
4. Set a **unique bucket name** (e.g., `my-cv-website-2025`).
5. Wait for stack creation to complete (~5 minutes).

---

## 📤 Step 3: Upload Your Website Files

Once the stack is created, upload your static website files to the bucket created by the template.

```bash
aws s3 cp index.html s3://my-cv-website-2025/
aws s3 cp index.css s3://my-cv-website-2025/
aws s3 cp avatar.png s3://my-cv-website-2025/
```

> ✅ Replace `my-cv-website-2025` with the bucket name you used.

---

## 🌍 Step 4: Access Your Website

1. Go to the **Outputs** tab of your stack.
2. Copy the value of `CloudFrontDomainName` — it looks like:

```
https://d123abc4def567.cloudfront.net
```

3. Paste it into your browser — your website should be live!

If you want to remove the `index.html` suffix from the URL, note that the template already sets the default root object to `index.html`.

---

## 🧹 Step 5: Cleanup to Avoid Charges

To avoid unwanted costs, delete all resources when you're done:

### Option 1: Delete via CLI

```bash
aws s3 rm s3://my-cv-website-2025 --recursive
aws cloudformation delete-stack --stack-name my-static-website
```

### Option 2: Delete via Console
1. Empty the S3 bucket.
2. Delete the CloudFront distribution.
3. Delete the CloudFormation stack.

---

## 🧭 Optional Next Steps

- Add a **custom domain** using [Amazon Route 53](https://aws.amazon.com/route53/) and [AWS Certificate Manager](https://aws.amazon.com/certificate-manager/).
- Enable **WAF security** for additional protection.
- Add **logging and metrics** for visibility.

---

## 📚 References

- [Amazon S3 Documentation](https://docs.aws.amazon.com/s3/index.html)
- [Amazon CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/index.html)
- [AWS CloudFormation Documentation](https://docs.aws.amazon.com/cloudformation/index.html)

---

🎉 **Congratulations!**  
You’ve automated the entire static website deployment process with CloudFormation.
