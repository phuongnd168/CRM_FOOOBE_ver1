import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreUpdateUser {
  constructor() {
    makeObservable(this, {
        dataUpdateUser: observable,
        action_updateuser: action,
    });
  }
  dataUpdateUser = {};
  async action_updateuser(param){
      const result = await Request.post(WsCode.UPDATE_USER,param)
      const {data, code, message} = result
      console.log(result)
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        
      }
      return result;
  }

  
}

const StoreUpdateUserContext = new StoreUpdateUser();

export default StoreUpdateUserContext;
