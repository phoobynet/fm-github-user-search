import type { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'
import { GithubUser } from '@/types/GithubUser'

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
})

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<GithubUser | { error: string } | undefined>,
) {
  try {
    const response = await octokit.request('GET /users/{username}', {
      username: req.query.username as string,
    })
    res.status(200).json(response.data as GithubUser)

    // if (response.status === 200) {
    // } else if (response.status === 404) {
    //   res.status(404).send({
    //     error: `User called "${req.query.username}" not found`,
    //   })
    // }
  } catch (e) {
    // console.error(e)
    res.status(404).json({
      error: `User called "${req.query.username}" not found`,
    })
    // throw new Error(`Throwing up`)
  }
}
