#!/bin/bash

function setup() {
    echo "Setup Started"
    apk update
    echo "Enviroment: ${ENV}"
    pip install awscli
    apk add nodejs-current
    echo "Check node version:"
    node -v
    apk add yarn --no-cache -u
}

function runYarnInstall() {
    echo "Running Command: yarn install"
    yarn install
    echo "Running Command: yarn ${ENV}"
    yarn build
}

function deployToS3() {
    echo "Deploying SPA to ${ENV} resources spa/returns s3 bucket (hermes-cms-nonprod-${env}-courier-marketplace)"

    # This needs to be updated with the new S3 bucket
    aws s3 sync ./dist/ s3://hermes-cms-nonprod-${ENV}-courier-marketplace-ui --delete

}

local DEPLOYMENT_ROLE_ARN

function chooseAppropriateDeploymentRole() {

    case ${ENV} in
        dev) DEPLOYMENT_ROLE_ARN="arn:aws:iam::721564986633:role/CiCdSharedRole";;
        # This is for prod builds
        #'build-prod) DEPLOYMENT_ROLE_ARN="arn:aws:iam::759644178294:role/CiCdSharedRole";;
        *) echo "ERROR: UNKOWN ENV";;
    esac

    echo "Assuming IAM Role ${DEPLOYMENT_ROLE_ARN}..."

    resetIAMRole

       # KST=access*K*ey, *S*ecretkey, session*T*oken
    local KST=(`aws sts assume-role --role-arn ${DEPLOYMENT_ROLE_ARN} \
          --role-session-name hermes.spa.returns_AssumeRole \
          --duration-seconds 900 \
          --query '[Credentials.AccessKeyId,Credentials.SecretAccessKey,Credentials.SessionToken]' \
          --output text`)

    export AWS_ACCESS_KEY_ID="${KST[0]}"
    export AWS_ACCESS_KEY="${KST[0]}"
    export AWS_SECRET_ACCESS_KEY="${KST[1]}"
    export AWS_SECRET_KEY="${KST[1]}"
    export AWS_SESSION_TOKEN="${KST[2]}"
    # older var seems to work the same way
    export AWS_SECURITY_TOKEN="${KST[2]}"
    export AWS_DELEGATION_TOKEN="${KST[2]}"

    echo "AWS KEY ID: ${KST}"
}

function resetIAMRole() {
    # Clear out existing AWS session environment, or the awscli call will fail
    unset AWS_ACCESS_KEY_ID AWS_SECRET_ACCESS_KEY AWS_SESSION_TOKEN AWS_SECURITY_TOKEN
    # Old ec2 tools use other env vars
    unset AWS_ACCESS_KEY AWS_SECRET_KEY AWS_DELEGATION_TOKEN
}

setup
cd code
runYarnInstall
chooseAppropriateDeploymentRole
deployToS3
cd ../
