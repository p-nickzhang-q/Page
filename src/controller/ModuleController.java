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

import dao.DBCollectionFactory;

/**
 * TODO complete the class documentation
 *
 */
@Controller
@RequestMapping("/module")
public class ModuleController {

  private DBCollection collection = DBCollectionFactory.getModulecollection();

  @RequestMapping(value = "/moduleList.do", method = RequestMethod.GET)
  public @ResponseBody String getModuleList() {
    List<DBObject> modules = collection.find(new BasicDBObject().append("moduleName", new BasicDBObject().append("$ne", "system"))).toArray();
    Util.transformObjectIdList(modules);
    String json = new Gson().toJson(modules);
    return json;
  }
  
  @RequestMapping(value = "/system.do", method = RequestMethod.GET)
  public @ResponseBody String getSystemModule() {
    DBObject system = collection.findOne(new BasicDBObject().append("moduleName", "system"));
    Util.transformObjectIdObj(system);
    String json = new Gson().toJson(system);
    return json;
  }
  
  @RequestMapping(value = "/module.do", method = RequestMethod.GET)
  public @ResponseBody String getModule(@RequestParam("id") String id) {
    DBObject module = collection.findOne(new BasicDBObject().append("_id", new ObjectId(id)));
    Util.transformObjectIdObj(module);
    String json = new Gson().toJson(module);
    return json;
  }
  
}
