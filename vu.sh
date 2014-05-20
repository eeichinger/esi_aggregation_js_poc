pkill varnishd
# rm -rf ./varnishd
# mkdir ./varnishd
varnishd -a :1234 -i hugo -f varnish-base.vcl -T localhost:2345
#varnishlog
