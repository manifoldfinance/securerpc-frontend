import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';

// @note this should be `NEXT_PUBLIC_COMMIT_SHA` for nextjs
const commit = process.env.COMMIT_SHA

const github_org = 'manifoldfinacne'
const github_repo = 'securerpc-frontend'

async function getCommit() {
  if (!commit) return `No COMMIT_SHA environment variable set.`
  try {
    const res = await fetch(`https://api.github.com/repos/${github_org}/${github_repo}/commits/${commit}`)
    const data = await res.json()
    return {
      isDeployCommit: commit === 'HEAD' ? 'Unknown' : true,
      sha: data.sha,
      author: data.commit.author.name,
      date: data.commit.author.date,
      message: data.commit.message,
      link: data.html_url,
    }
  } catch (error) {
    return `Unable to get git commit info: ${error.message}`
  }
}

async function go() {
  const buildInfo = {
    buildTime: Date.now(),
    commit: await getCommit(),
  }

  // @note this is different for nextjs, should be in dir: `.next/~`
  fs.writeFileSync(path.join('.next/build-manifest.json'), JSON.stringify(buildInfo, null, 2))
  console.log('build info generated', buildInfo)
}
go()