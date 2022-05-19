import {action, makeObservable, observable} from "mobx";
import { LOCAL_STORAGE } from "../helpers/Contant";
import { Request } from "../helpers/Request";
import { WsCode } from "../helpers/WsCode";

class StoreReport {
  constructor() {
    makeObservable(this, {
        dataReport: observable,
        action_report: action,
    });
  }
  dataReport = {};
  async action_report(param){
      const result = await Request.post(WsCode.LIST_USER,param)
      const {data, code, message} = result
      console.log(result)
      if(code===200){
        sessionStorage.setItem(LOCAL_STORAGE.TOKEN,data.checkPoint?.token)
        sessionStorage.setItem(LOCAL_STORAGE.ID,data.checkPoint?.fouid)
        
        this.dataReport = data
      }
      return result;
  }

  
}

const StoreReportContext = new StoreReport();

export default StoreReportContext;
