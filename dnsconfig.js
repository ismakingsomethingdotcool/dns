var REG_NONE = NewRegistrar('none', 'NONE');
var PACKETFRAME = NewDnsProvider('packetframe', 'PACKETFRAME');

D(
  'ismakingsomething.cool',
  REG_NONE,
  DnsProvider(PACKETFRAME)
);

require('./entries.js')
