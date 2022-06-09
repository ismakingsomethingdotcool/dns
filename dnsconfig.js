var REG_NONE = NewRegistrar('none', 'NONE');
var PACKETFRAME = NewDnsProvider('packetframe', 'PACKETFRAME');

D(
  'ismakingsomething.cool',
  REG_NONE,
  DnsProvider(PACKETFRAME),
  A('@','89.106.200.1'),
  AAAA('@','2a12:5240::1'),
  CNAME('www','ismakingsomethingdotcool.pages.dev.')
);

require('./entries.js')
