// Copyright (c) 2003-2016, One Network Enterprises, Inc. All rights reserved.

package controller;

import java.util.List;

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
@RequestMapping("/page")
public class PageController {

  private DBCollection collection = DBCollectionFactory.getPageDBCollection();

  @RequestMapping(value = "/pageList.do", method = RequestMethod.GET)
  public @ResponseBody String getPageList() {
    List<DBObject> pages = collection.find().toArray();
    Util.transformObjectIdList(pages);
    String json = new Gson().toJson(pages);
    return json;
  }

//  @RequestMapping(value = "/singlePage.do", method = RequestMethod.GET)
//  public @ResponseBody String getPage(@RequestParam("id") String id) {
//    DBObject page = collection.findOne(new BasicDBObject().append("_id", new ObjectId(id)));
//    Util.transformObjectIdObj(page);
//    String json = new Gson().toJson(page);
//    return json;
//  }
  
  @RequestMapping(value = "/singlePage.do", method = RequestMethod.GET)
  public @ResponseBody String getPageByName(@RequestParam("pageName") String pageName) {
    DBObject page = collection.findOne(new BasicDBObject().append("pageName", pageName));
    Util.transformObjectIdObj(page);
    String json = new Gson().toJson(page);
    return json;
  }

}
