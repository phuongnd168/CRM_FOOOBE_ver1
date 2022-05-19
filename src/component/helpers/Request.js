import axios from "axios";

export const Request = {
    async headers(){
        return axios.create({
            baseURL:'https://fooobe.com/api/admin/',
            headers: {
              "Content-Type": "application/json",
            },
        })
    },
    async post(wsCode,json){
        let api = await this.headers();
        try {
            const result = await api.post(wsCode,json,{
                timeout: 60000
            })
            
            const {data} = result;
            const {status,mess,resul} = data;
            if(status === 200) {
                return {
                    code:status,
                    message:mess,
                    data : resul
                }
            }else{
                return {
                    code:status,
                    message:mess,
                    data : resul
                }
            }

        } catch (error) {
            console.log("lỗi Api")
        }
    }

}