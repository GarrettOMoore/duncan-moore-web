const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query = '', { variables }: Record<string, any> = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(API_URL, {
    headers,
    method: 'POST',
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  return json.data
}



export async function getAllImages() {
  const data = await fetchAPI(`
  {
    mediaItems (first: 500) {
      nodes {
        sourceUrl
        slug
        title
      }
    }
  }`)

  return data?.mediaItems
}

export async function getVideoContent() {
  const data = await fetchAPI(`
  {
      pages(where: {name: "Video"}) {
        nodes {
          id
          content
          __typename
        }
      }
  }`)

  return data?.pages
}

export async function getGalleryContent() {
  const data = await fetchAPI(`
  {
      pages(where: {name: "Gallery"}) {
        nodes {
          id
          content
          __typename
        }
      }
  }`)

  return data?.pages
}


export async function getAboutContent() {
  const content = await fetchAPI(`
  {
      pages(where: {name: "Bio"}) {
        nodes {
          id
          content
        }
      }
  }`)

  return content?.pages
}

export async function getLandingContent() {
  const content = await fetchAPI(`
  {
      pages(where: {name: "Home"}) {
        nodes {
          id
          content
        }
      }
  }`)

  return content?.pages
}

export async function getBackgroundImage() {
  const content = await fetchAPI(`
  {
    mediaItem (id: "cG9zdDo3MjM") {
      id
      sourceUrl
      slug
  }
  }`)

  return content
}
