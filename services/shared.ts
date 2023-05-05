import { google } from 'googleapis'

export function makeOAuth2Client({
  clientId,
  clientSecret,
}: {
  clientId: string
  clientSecret: string
}) {
  return new google.auth.OAuth2(
    /* YOUR_CLIENT_ID */ clientId,
    /* YOUR_CLIENT_SECRET */ clientSecret,
    /* YOUR_REDIRECT_URL */ 'urn:ietf:wg:oauth:2.0:oob'
  )
}
