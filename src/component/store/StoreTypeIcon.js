import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreTypeIcon {
  constructor() {
    makeObservable(this, {
        dataTypeIcon: observable,
        action_typeicon: action,
    });
  }
  dataTypeIcon = {};
  async action_typeicon(param){
      const result = await Request.post(WsCode.LIST_TYPE_ICON,param)
      const {data, code, message} = result
      console.log(result)
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        this.dataTypeIcon = data
      }
      return result;
  }

  
}

const StoreTypeIconContext = new StoreTypeIcon();

export default StoreTypeIconContext;
