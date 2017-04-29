// Copyright (c) 2003-2016, One Network Enterprises, Inc. All rights reserved.

package dao;

import java.net.UnknownHostException;

import com.mongodb.MongoClientOptions.Builder;
import com.mongodb.*;

/**
 * TODO complete the class documentation
 *
 */
public class DBCollectionFactory {

  private static MongoClient mongoClient;
  private static final DBCollection pageCollection = buildPageCollection();
  private static final DBCollection dataCollection = buildCollection("data");
  private static final DBCollection moduleCollection = buildCollection("module");

  private static DBCollection buildPageCollection() {
    try {
      mongoClient = new MongoClient("localhost", 27017);
      Builder options = MongoClientOptions.builder();
      options.connectionsPerHost(3);
      DB db = mongoClient.getDB("PageConfig");
      DBCollection collection = db.getCollection("page");
      return collection;
    }
    catch (UnknownHostException e) {
      System.out.println(e);
    }
    return null;
  }

  private static DBCollection buildCollection(String collectionName) {
    try {
      mongoClient = new MongoClient("localhost", 27017);
      Builder options = MongoClientOptions.builder();
      options.connectionsPerHost(3);
      DB db = mongoClient.getDB("PageConfig");
      DBCollection collection = db.getCollection(collectionName);
      return collection;
    }
    catch (UnknownHostException e) {
      System.out.println(e);
    }
    return null;
  }

  public static DBCollection getPageDBCollection() {
    return pageCollection;
  }

  public static DBCollection getDataDBCollection() {
    return dataCollection;
  }
  
  public static MongoClient getMongoClient() {
    return mongoClient;
  }
  
  public static DBCollection getModulecollection() {
    return moduleCollection;
  }
}
