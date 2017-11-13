# linux nvm

- introduce: Node Version Manager.

1. install nvm

- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash`

2. install nodejs with nvm

- `nvm ls-remote` view what nodejs versions you can install.

- `nvm install v7.6.0` install nodejs(the version is 7.6.0)

- ps: you can install mutiple versions for the nodejs.

3. switch nodejs version

- `nvm use v7.6.0`

- `nvm current` view this nodejs version.

- ps: when you open a new bash, the node will be system.

- `nvm alias default <version>` this command will specify a default nodejs version.
