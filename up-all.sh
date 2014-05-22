# mvn -f javasamplewebapp/pom.xml jetty:run > jetty.log &
# php test webserver doesn't set any cache headers at all - good for dev, bad when testing caching ;)
#php -S 127.0.0.1:4001 -t ./cmsserver &
#php -S 127.0.0.1:4002 -t ./sampleappserver &
(pushd cmsserver && python -m SimpleHTTPServer 4001) &
(pushd sampleappserver && python -m SimpleHTTPServer 4002) &

varnishd -a :1234 -i hugo -f varnish-base.vcl -T localhost:2345 -F &
# varnishlog &
jobs
