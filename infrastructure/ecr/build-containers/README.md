# Data Related Jobs

This is the ECR repository for data related jobs.

## Tagging New Containers

The convention is `$REPO_NAME:$TAG`, meaning that you would name containers in this repository as `$ENV-data-jobs:$JOB_NAME`

Example: `dev-data-jobs:data-science-transformation`. This would allow the ECS tasks to pull this container for the `data-science-transformation` job.

## Deployment

### Permissions

The role you assume to deploy new containers must have the following policies:

```json
{
  "Effect": "Allow",
  "Action": [
    "ecr:CompleteLayerUpload",
    "ecr:GetAuthorizationToken",
    "ecr:UploadLayerPart",
    "ecr:InitiateLayerUpload",
    "ecr:BatchCheckLayerAvailability",
    "ecr:PutImage"
  ]
}
```

### Process

The deployment of this service is done in CodeBuild. Any change commited to `template.yaml` will start a new deployment.

