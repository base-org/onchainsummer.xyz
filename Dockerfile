FROM 652969937640.dkr.ecr.us-east-1.amazonaws.com/containers/node:v16

RUN apt-get update && apt-get install -y zip python3 make gcc g++

ENV NODE_ENV="production"
ENV NEXT_PUBLIC_AARWEAVE_API_URL="https://arweave.net/graphql"
ENV NEXT_PUBLIC_CHAIN_ENV="staging"
ENV NEXT_PUBLIC_MINT_DOT_FUN_API_KEY="key_jaeRe1qMcvpzyWJz1lBG60jsQIgwCE"
ENV NEXT_PUBLIC_MINT_DOT_FUN_API_URL="https://api.mint.fun/api/v1"
ENV NEXT_PUBLIC_MINT_DOT_FUN_CHAIN_ID="5"
ENV __NEXT_PRIVATE_PREBUNDLED_REACT="next"

WORKDIR /app

COPY . .

# Install dependencies (including dev, which are needed for build)
RUN yarn --immutable --production=false

RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
