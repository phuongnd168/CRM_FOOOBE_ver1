import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreUpdateStory {
  constructor() {
    makeObservable(this, {
        dataUpdateStory: observable,
        action_updatestory: action,
    });
  }
  dataUpdateStory = {};
  async action_updatestory(param){
      const result = await Request.post(WsCode.UPDATE_STORY,param)
      const {data, code, message} = result
      console.log(result)
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        
      }
      return result;
  }

  
}

const StoreUpdateStoryContext = new StoreUpdateStory();

export default StoreUpdateStoryContext;
