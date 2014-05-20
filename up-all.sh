# mvn -f javasamplewebapp/pom.xml jetty:run > jetty.log &
php -S 127.0.0.1:4001 -t ./cmsserver &
php -S 127.0.0.1:4002 -t ./sampleappserver &
varnishd -a :1234 -i hugo -f varnish-base.vcl -T localhost:2345 -F &
# varnishlog &
jobs
