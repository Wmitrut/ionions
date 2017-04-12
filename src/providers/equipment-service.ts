import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EquipmentService {

  public SERVICE_URL='http://104.236.125.102:8080/forti/api/equipamento';
 

  constructor(public http: Http) {
   
  }

 saveEquipment(equipmentCode:string, equipmentName:string){
    let method = '/save';
    let params = {"leqId":null,"leqCodigo":equipmentCode,"leqNome":equipmentName,"cliId":1};
          return this.http.post(this.SERVICE_URL+method, params).map(response => response.json()).catch(this.handleError);
  }
  deleteEquipment(id:string){
    let params =  {"id":id};
          return this.http.delete(this.SERVICE_URL, params).map(response => response.json()).catch(this.handleError);
  }
  findAllEquipment(){
     let method = '/findAll';
     let params = {"limit":10 ,"page":1};
            return this.http.get(this.SERVICE_URL+method, params).map(response => response.json()).catch(this.handleError);
  }




  findEquipment(){
     let method = '/findfiltered';
     let params = {"limit":10 ,"page":1,"value":"UPDATE","prop":null};
            return this.http.post(this.SERVICE_URL+method, params).map(response => response.json()).catch(this.handleError);
  }
  findByIdEquipment(){
     let method = '/findById';  
     let params = {"value":36};
            return this.http.get(this.SERVICE_URL+method, params).map(response => response.json()).catch(this.handleError);

  }

     handleError(error) {
        console.log('handleError(error) '+error+' *****');
        return Observable.throw(error || 'Server error');
    }


}
