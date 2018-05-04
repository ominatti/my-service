# my-service

To install my-service we need to install serverless.com tool to deploy our lambda functions

```bash
> npm install -g serverless
```

Then download my-service project
```bash
> git clone git@github.com:ominatti/my-service.git
```
Once we cloned my-service project we need to install its dependencies.
```bash
> cd /[PATH TO PROJECT FOLDER]
> npm install
```

We are now ready to deploy my-service (lambda functions) by using
```bash
> npm run deploy -- --stage <stage>
```
