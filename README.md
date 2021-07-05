# replier

> A GitHub App built with [Probot](https://github.com/probot/probot) that A replier that says Welcome for thanks and says thanks for an idea

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t replier .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> replier
```

## Contributing

If you have suggestions for how replier could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 LG <76845820+coder-lg@users.noreply.github.com>
