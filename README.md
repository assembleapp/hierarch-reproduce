Run:

```bash
git clone https://github.com/assembleapp/hierarch-reproduce
cd hierarch-reproduce
yarn
node run
```

... and you should see an output `1`;
one variable declaration has been found in the program.

Run:

```
docker build -t hierarch-reproduce .
docker run hierarch-reproduce node run
```

or:

```
docker-compose up
```

and you likely see an error code,
either `139` or something about an invalid `ELF header`.
Boo hoo.
