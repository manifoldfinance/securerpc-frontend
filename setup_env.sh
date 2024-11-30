#!/usr/bin/env bash


# List of environment variables that are automatically populated, if not already set.
# Those variables are populated this way so that deploying locally and working locally behave identically to staging and production.

# XXX To print those variables for testing purpose, use: `npm script:populate-git-env:print`

export "GIT_COMMIT_SHA=${GIT_COMMIT_SHA:-$(npm --silent git:getCommitSHA)}"
export "GIT_COMMIT_REF=${GIT_COMMIT_REF:-$(npm --silent git:getCommitRef)}"
export "GIT_COMMIT_TAGS=${GIT_COMMIT_TAGS:-$(npm --silent git:getReleasesAndTags)}"
export "GIT_COMMIT_MESSAGE=${GIT_COMMIT_MESSAGE:-$(npm --silent git:getCommitMessage)}"

