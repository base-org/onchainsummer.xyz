export interface ITweetImage {
  url: string
  width: number
  height: number
}

export interface ITweetUrl {
  start: number
  end: number
  url: string
  expanded_url: string
  display_url: string
  images?: ITweetImage[]
  status?: number
  title?: string
  description?: string
  unwound_url?: string
  media_key?: string
}

export interface ITweetMediaVariant {
  bit_rate?: number
  content_type: string
  url: string
}

export interface ITweetCardProps {
  author: {
    name: string
    username: string
    profile_image_url: string
  }
  media?: {
    url?: string
    preview_image_url?: string
    width: number
    height: number
    type: string
    variants?: ITweetMediaVariant[]
    media_key: string
  }
  tweet: {
    text: string
    entities?: {
      urls: ITweetUrl[]
    }
    created_at: string
    attachments?: {
      media_keys: string[]
    }
  }
}
