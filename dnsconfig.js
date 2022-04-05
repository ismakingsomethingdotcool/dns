var REG_NONE = NewRegistrar('none', 'NONE');
var PACKETFRAME = NewDnsProvider('packetframe', 'PACKETFRAME');

D(
  'ismakingsomething.cool',
  REG_NONE,
  DnsProvider(PACKETFRAME),
  A('@','89.41.169.49'),
  AAAA('@','2a01:7c8:e001:1a::6ab2'),
  CNAME('www','ismakingsomethingdotcool.pages.dev.')
);

require('./entries.js')
