docker build -t sekai_web_scanner .
docker run  --name=sekai_web_scanner --rm -p1337:1337 -it sekai_web_scanner
