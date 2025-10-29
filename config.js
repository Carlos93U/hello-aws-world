// configuration file

const cvData = {
    // Personal info
    personalInfo: {
        name: "Juan C. Huillcas",
        title: "IA Cloud Solution Architect",
        email: "juan.huillcas.a@uni.pe",
        phone: "+51 989891835",
        linkedin: "https://www.linkedin.com/in/juan-carlos-huillcas/",
        github: "https://github.com/Carlos93U",
        location: "Lima, Peru"
    },

    // Profesional Profile
    profile: "Cloud Solutions Architect with over 7 years of experience in designing and implementing scalable AI and ML architectures across multi-cloud platforms (AWS, Azure, GCP). Skilled in integrating data services, MLOps frameworks, advanced analytics, and generative AI models. Demonstrated success in leading AI-driven digital transformation initiatives focused on cost efficiency, performance optimization, and robust cloud security.",

    // Experience
    experience: [
        {
            position: "IA Cloud Solution Architect",
            company: "TechCorp Solutions",
            location: "Lima, Peru",
            period: "March 2022 - Present",
            achievements: [
                "Designed multi-cloud AI/ML architectures integrating AWS SageMaker, Azure ML, and Vertex AI, improving scalability and reducing costs by 30%",
                "Led the implementation of generative AI solutions (LLMs and RAG) for customer support and document analysis on AWS and Azure",
                "Developed hybrid MLOps pipelines with Kubeflow and MLflow, enabling automated deployment of over 25 production models",
                "Designed infrastructure following the AWS Well-Architected Framework with a focus on security, resilience, and operational efficiency"
            ]
        },
        {
            position: "Cloud & MLOps Engineer",
            company: "DataInnovate SAC",
            location: "Lima, Peru",
            period: "January 2020 - February 2022",
            achievements: [
                "Implemented MLOps platforms on AWS and Azure, reducing the model training and deployment cycle from weeks to hours",
                "Collaborated with data architects to design data lakes and AI pipelines using Glue, BigQuery, and Databricks",
                "Automated model versioning and monitoring with MLflow and Prometheus, improving traceability and regulatory compliance",
                "Integrated Infrastructure as Code (IaC) practices using Terraform and CloudFormation to standardize multi-environment deployments"
            ]
        },
        {
            position: "Data Engineer",
            company: "Analytics Pro",
            location: "Lima, Peru",
            period: "June 2018 - December 2019",
            achievements: [
                "Built ETL/ELT pipelines in Spark and AWS Glue processing over 1TB of data daily",
                "Developed demand forecasting and predictive maintenance models in collaboration with data science teams",
                "Optimized storage architectures and queries in Redshift and BigQuery"
            ]
        }
    ],

    // Education
    education: [
        {
            degree: "Computer Science",
            institution: "Universidad Nacional de Ingeniería",
            location: "Lima, Peru",
            period: "2014 - 2018",
            additional: "Thesis: Design of Scalable Architectures for Machine Learning Models in the Cloud"
        },
        {
            degree: "AWS Certified Machine Learning – Specialty Certification",
            institution: "Amazon Web Services",
            location: "Online",
            period: "2023"
        }
    ],

    // Technical Skills
    skills: {
        "Cloud Architecture": [
            "AWS (SageMaker, Lambda, EKS, Redshift, Bedrock)",
            "Azure (AI Studio, Cognitive Services, Synapse, AKS)",
            "Google Cloud (Vertex AI, BigQuery, Dataflow)"
        ],
        "IA & Machine Learning": [
            "Modelos predictivos, IA generativa (LLMs, embeddings, RAG)",
            "Computer Vision, NLP, advanced analytics"
        ],
        "MLOps & DataOps": [
            "Kubeflow",
            "MLflow",
            "Airflow",
            "Vertex Pipelines",
            "AWS Step Functions"
        ],
        "Architecture & DevOps": [
            "Docker",
            "Kubernetes",
            "Helm",
            "Terraform",
            "CloudFormation",
            "ArgoCD"
        ],
        "CI/CD & Observability": [
            "GitHub Actions",
            "GitLab CI",
            "Jenkins",
            "Prometheus",
            "Grafana",
            "CloudWatch"
        ],
        "Lenguajes": [
            "Python",
            "SQL",
            "Bash",
            "YAML",
            "Go"
        ],
        "Data & Analytics": [
            "Redshift",
            "BigQuery",
            "Azure Synapse",
            "Kafka",
            "Snowflake"]
    },

    // Featured Projects
    projects: [
        {
            name: "Generative AI Multi-Cloud Architecture",
            description: "Designed a hybrid architecture using AWS Bedrock and Azure OpenAI Service for automated financial report generation and text analysis.",
            technologies: "AWS Bedrock, Azure OpenAI, Lambda, API Gateway, DynamoDB, Azure Functions, Cosmos DB"
        },
        {
            name: "MLOps Platform for Predictive Retail",
            description: "Implemented a multi-cloud MLOps platform managing demand forecasting and personalized recommendation models in production.",
            technologies: "SageMaker, Vertex AI, Kubeflow, MLflow, BigQuery, Cloud Run"
        }
    ],

    // Additional Certifications
    certifications: [
        "AWS Certified Solutions Architect - Professional",
        "AWS Certified AI Practitioner",
        "Google Professional Machine Learning Engineer",
        "Microsoft Certified: Azure AI Engineer Associate",
        "AWS Certified Data Analytics - Specialty",
        "Certified Kubernetes Administrator (CKA)",
        "HashiCorp Certified: Terraform Associate"
    ],

    // Languages
    languages: [
        { lang: "Spanish", level: "Native" },
        { lang: "English", level: "Advanced (C1)" }
    ]
};

// Don't modify this line
if (typeof module !== 'undefined' && module.exports) {
    module.exports = cvData;
}
