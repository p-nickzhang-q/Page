// Copyright (c) 2003-2016, One Network Enterprises, Inc. All rights reserved.

package controller;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import utill.Util;

import com.google.gson.Gson;
import com.mongodb.BasicDBObject;
import com.mongodb.DBCollection;
import com.mongodb.DBObject;
import com.mongodb.util.JSON;

import dao.DBCollectionFactory;

@Controller
@RequestMapping("/data")
public class DataController {

  private DBCollection dataCollection = DBCollectionFactory.getDataDBCollection();

  @RequestMapping(value = "/data.do", method = RequestMethod.POST)
  public @ResponseBody void save(@RequestBody String postData) {
    BasicDBObject data = (BasicDBObject) JSON.parse(postData);
    dataCollection.insert(data);
  }
  
  @RequestMapping(value = "/data.do", method = RequestMethod.PUT)
  public @ResponseBody void update(@RequestBody String postData) {
    BasicDBObject data = (BasicDBObject) JSON.parse(postData);
    Util.reserveObjectIdObj(data);
    dataCollection.update(new BasicDBObject().append("_id", data.get("_id")), data, false, false);
  }
  
  @RequestMapping(value = "/data.do", method = RequestMethod.GET)
  public @ResponseBody String getSingleData(@RequestParam("id") String id) {
    DBObject data = dataCollection.findOne(new BasicDBObject().append("_id", new ObjectId(id)));
    Util.transformObjectIdObj(data);
    String json = new Gson().toJson(data);
    return json;
  }
  
  @RequestMapping(value = "/dataList.do", method = RequestMethod.GET)
  public @ResponseBody String getDatas(@RequestParam("dataType") String dataType) {
    List<DBObject> datas = dataCollection.find(new BasicDBObject().append("dataType", dataType)).toArray();
    Util.transformObjectIdList(datas);
    String json = new Gson().toJson(datas);
    return json;
  }

}
