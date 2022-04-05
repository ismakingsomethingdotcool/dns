var REG_NONE = NewRegistrar('none', 'NONE');
var PACKETFRAME = NewDnsProvider('packetframe', 'PACKETFRAME');

D(
  'ismakingsomething.cool',
  REG_NONE,
  DnsProvider(PACKETFRAME),
  A('@','89.41.169.49'),
  CNAME('www','ismakingsomethingdotcool.pages.dev.')
);

require('./entries.js')
