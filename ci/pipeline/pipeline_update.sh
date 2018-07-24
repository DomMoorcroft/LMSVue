#!/bin/bash

# project variables
export PROJECT_TITLE="courier-marketplace-ui"
export PROJECT_NAME="courier-marketplace-ui"
export GROUP_NAME="courier-marketplace"

# git configuration
export GIT_BRANCH="master"
export GITLAB_REPO_URL="https://git.hermescloud.co.uk/${GROUP_NAME}/${PROJECT_NAME}"
export GITLAB_SSH="git@git.hermescloud.co.uk:${GROUP_NAME}/${PROJECT_NAME}.git"

# aws cli configuration
export AWS_DEFAULT_REGION="eu-west-1"
export AWS_DEFAULT_OUTPUT="text"

# concourse configuration
export CONCOURSE_ACCOUNT="cms"
export CONCOURSE_TEAM="cms"
export CONCOURSE_PIPELINE_NAME="courier-marketplace-ui"

echo "Home DIR = ${HOME}"
tmpFile=$(mktemp)
SAMPLE_PROJECT_BUCKET="hermes-sample-project-setup"

function downloadSshKey() {
    if [ ! -f "${HOME}/.ssh/concourse_id_rsa" ];
    then
        echo "Starting key download"
        aws s3 cp "s3://${SAMPLE_PROJECT_BUCKET}/concourse_id_rsa" "${HOME}/.ssh/" >> ${tmpFile} 2>&1
        chmod 400 "${HOME}/.ssh/concourse_id_rsa" >> ${tmpFile} 2>&1
        echo "Key downloaded"
    fi
}

function deleteSshKey() {
    echo "Starting key delete"
    rm -f "${HOME}/.ssh/concourse_id_rsa" >> ${tmpFile} 2>&1
    rm -f "${tmpFile}"
    echo "Key deleted"
}

function updatePipeline() {
    echo "Starting pipeline update"
    # only redirect errors to file here because fly cli has user prompts he will need to see.
    fly -t ${CONCOURSE_ACCOUNT} set-pipeline -c pipeline.yml -p "${CONCOURSE_PIPELINE_NAME}" \
    --var "gitlab-private-key=$(cat ~/.ssh/concourse_id_rsa)" \
    --var "gitlab-repo-url=${GITLAB_REPO_URL}" \
    --var "gitlab-ssh=${GITLAB_SSH}" \
    --var "git-branch=${GIT_BRANCH}"
    echo "Finished pipeline update"
    exit;
}

function cleanup() {
    deleteSshKey
}
trap cleanup EXIT

downloadSshKey
updatePipeline
deleteSshKey
