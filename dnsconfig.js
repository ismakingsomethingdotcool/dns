var REG_NONE = NewRegistrar('none', 'NONE');
var PACKETFRAME = NewDnsProvider('packetframe', 'PACKETFRAME');

D(
  'ismakingsomething.cool',
  REG_NONE,
  DnsProvider(PACKETFRAME),
  A('@','45.55.72.95'),
  TXT('_redirect','Redirects permanently to https://www.ismakiingsomething.cool'),
  CNAME('www','ismakingsomethingdotcool.pages.dev.')
);

require('./entries.js')
