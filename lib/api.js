import matter from 'gray-matter'

const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_ESA_API_TOKEN
const TEAM = process.env.NEXT_EXAMPLE_CMS_ESA_TEAM
const CATEGORY = process.env.NEXT_EXAMPLE_CMS_ESA_CATEGORY
const endpoint = `https://api.esa.io/v1/teams/${TEAM}/posts`

async function fetchAPI(path) {
  const res = await fetch(`${endpoint}${path}`, {
    headers: {'Authorization': `Bearer ${API_TOKEN}`}
  })

  if (!res.ok) {
    console.error(await res.text())
    throw new Error('Failed to fetch API')
  }

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json
}

function fetchAllPosts() {
  const params = [['sort', 'created'], ['order', 'desc'], ['q', 'wip:false']]

  // If you set the category environment variable,
  // this app fetches blogs whose category name matches to it
  if (typeof CATEGORY !== 'undefined') {
    params.push(['q', `on:${CATEGORY}`])
  }

  const param = new URLSearchParams(params).toString()

  return fetchAPI(`?${param}`)
}

function mapPost(post, fields) {
  const {data, content} = matter(post.body_md)
  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    switch (field) {
      case 'slug':
        if (typeof data.slug === 'undefined') {
          throw new Error('Slug is not set.')
        }
        items[field] = data.slug
        break
      case 'content':
        items[field] = content
        break
      default:
        if (data[field]) {
          items[field] = data[field]
        }
        break
    }
  })

  return items
}

export async function getPostBySlug(slug, fields = []) {
  const data = await fetchAllPosts()
  const posts = data.posts.map((post) => mapPost(post, fields))
  return posts.filter((post) => post.slug === slug)[0]
}

export async function getAllPosts(fields = []) {
  const data = await fetchAllPosts()
  return data.posts.map((post) => mapPost(post, fields))
}
