import items from './items.js';

items.forEach((item) => {
  fetch(`https://packetframe.com/zones/${process.env.zoneid}/records`,{
    method: 'POST',
    // TODO: check if this actually works
    body: JSON.stringify({
      zone: process.env.zoneid,
      type: 'NS',
      ttl: '3600',
      value: item.nameserver,
    })
  })
});