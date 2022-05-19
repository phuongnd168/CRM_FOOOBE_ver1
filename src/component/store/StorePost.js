import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StorePost {
  constructor() {
    makeObservable(this, {
        dataPost: observable,
        action_post: action,
    });
  }
  dataPost = {};
  async action_post(param){
      const result = await Request.post(WsCode.LIST_STORY,param)
      const {data, code, message} = result
      
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        this.dataPost = data
      }
      return result;
  }

  
}

const StorePostContext = new StorePost();

export default StorePostContext;
