/**
 * Created by ytang on 2018/9/18.
 */

import React from 'react'
import store from '../../store'
import actionType from '../../utils/config/actionType'
import LoadingHUD from './LoadingHUD'
import {createAction} from 'redux-actions'
import RootSiblings from 'react-native-root-siblings'

const loadingAction = createAction(actionType.FETCH_SHOW_HUD)

let sibling = undefined

const ProgressHUD = {
    show: () => {
        sibling = new RootSiblings(<LoadingHUD />)
    },
    hidden: ()=> {
      if (sibling instanceof RootSiblings) {
          sibling.destroy()
      }
    }
}

const RootHUD = {
    show: () => {
        let currentStatus = store.getState().common.loading.showHUD
        if(!currentStatus){
            ProgressHUD.show()
            store.dispatch(loadingAction(true))
        }
    },

    hidden:() => {
        ProgressHUD.hidden()
        store.dispatch(loadingAction(false))
    }
}

export {RootHUD}