import React from 'react';
import { Switch, Route} from 'react-router-dom'
import Detail from '@/views/Detail'
function DetailApp () {
  return (
    <Switch>
      <Route path = '/detail/:id' component = { Detail }></Route>
    </Switch>
  )
}

export default DetailApp;