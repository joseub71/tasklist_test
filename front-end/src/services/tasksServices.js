import {global} from "global";
import axios from "axios";

const header={
  'Access-Control-Allow-Origin': "*",
  "Content-Type": "application/json",
}

export const taskGetServices = ()=> axios.get(global.TASKS_GET, header);

export const taskPutServices = (task)=> axios.put(global.TASKS_PUT, task, header);

