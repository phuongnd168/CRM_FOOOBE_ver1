import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreUser {
  constructor() {
    makeObservable(this, {
        dataUser: observable,
        action_user: action,
    });
  }
  dataUser = {};
  async action_user(param){
      const result = await Request.post(WsCode.LIST_USER,param)
      const {data, code, message} = result
      
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        this.dataUser = data
      }
      return result;
  }

  
}

const StoreUserContext = new StoreUser();

export default StoreUserContext;
