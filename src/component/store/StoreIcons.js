import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreIcons {
  constructor() {
    makeObservable(this, {
        dataIcons: observable,
        action_icons: action,
    });
  }
  dataIcons = {};
  async action_icons(param){
      const result = await Request.post(WsCode.LIST_ICONS,param)
      const {data, code, message} = result
      console.log(result)
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        this.dataIcons = data
      }
      return result;
  }

  
}

const StoreIconsContext = new StoreIcons();

export default StoreIconsContext;
