import React from 'react';

export default (props: any) => {

  return (<div>Great success 3 {process.env.GATEWAY_URL ?? "fail"}</div>);
}