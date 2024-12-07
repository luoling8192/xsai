import type { CommonRequestOptions } from '../types'

import { clean } from './clean'

export const requestHeaders = (headers?: CommonRequestOptions['headers'], apiKey?: CommonRequestOptions['apiKey']) => clean({
  Authorization: apiKey ? `Bearer ${apiKey}` : undefined,
  ...headers,
})