import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreSticker {
  constructor() {
    makeObservable(this, {
        dataSticker: observable,
        action_sticker: action,
    });
  }
  dataSticker = {};
  async action_sticker(param){
      const result = await Request.post(WsCode.LIST_STICKER,param)
      const {data, code, message} = result
      console.log(result)
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        this.dataSticker = data
      }
      return result;
  }

  
}

const StoreStickerContext = new StoreSticker();

export default StoreStickerContext;
