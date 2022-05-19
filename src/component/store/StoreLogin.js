import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreLogin {
  constructor() {
    makeObservable(this, {
        dataAdmin: observable,
        action_login: action,
    });
  }
  dataAdmin = {};
  async action_login(param){
      const result = await Request.post(WsCode.LOGIN_TOADMIN,param)
      const {data} = result
      console.log(result)
      if(result?.data){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.fouid)
        sessionStorage.setItem(LOCAL_STORAGE.ROLE,data.role)
        
      }
      return result;
  }

  
}

const StoreLoginContext = new StoreLogin();

export default StoreLoginContext;
