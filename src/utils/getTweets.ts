import { ITweetResponse } from '@/models/Tweet'

import { tweets } from '../../generated/tweets'

export const getTweets = async () => {
  return tweets as ITweetResponse
  // TODO: Uncomment this when we have a Twitter API key
  // try {
  //   const bearer_token = process.env.TWITTER_BEARER_TOKEN as string
  //   const tweetIds = (process.env.TWEET_IDS as string).split(',')
  //   const params = new URLSearchParams()
  //   params.append('ids', tweetIds.join(','))
  //   params.append(
  //     'expansions',
  //     'attachments.poll_ids,attachments.media_keys,author_id,edit_history_tweet_ids,entities.mentions.username,geo.place_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id'
  //   )
  //   params.append(
  //     'media.fields',
  //     'duration_ms,height,media_key,preview_image_url,type,url,width,public_metrics,alt_text,variants'
  //   )
  //   params.append(
  //     'place.fields',
  //     'contained_within,country,country_code,full_name,geo,id,name,place_type'
  //   )
  //   params.append(
  //     'tweet.fields',
  //     'attachments,author_id,context_annotations,conversation_id,created_at,edit_controls,entities,geo,id,in_reply_to_user_id,lang,public_metrics,possibly_sensitive,referenced_tweets,reply_settings,source,text,withheld'
  //   )
  //   params.append(
  //     'user.fields',
  //     'created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,verified_type,withheld'
  //   )
  //   const response = await fetch(
  //     `https://api.twitter.com/2/tweets?${params.toString()}`,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //         Accept: 'application/json',
  //         Authorization: `Bearer ${bearer_token}`,
  //       },
  //     }
  //   )
  //   const tweets = (await response.json()) as ITweetResponse
  //   return tweets
  // } catch (ex) {
  //   return undefined
  // }
}
